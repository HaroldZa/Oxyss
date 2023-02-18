if (typeof app !== 'object') var app = {};

app.genIco = function (ico) {
  var _t = this, selector = $(ico.selector);

  if (!_t.spriteSvg) _t['spriteSvg'] = $(ico.sprite);

  selector.each(function () {
    var $t = $(this),
    el = _t.spriteSvg.find('#' + $t.data('svg')),
    attr = el[0].attributes,
    temp = '<div class="data-svg">\n' +
    '<svg xmlns="http://www.w3.org/2000/svg"';

    for (var i = 0; i < attr.length; i++) {
      temp += ' ' + (attr[i].name === 'id' ? 'class="svg_' + attr[i].value + '"' : attr[i].name + '="' + (attr[i].value) + '"');
    }

    temp += '>\n';

    for (l = 0; l < el[0].childNodes.length; l++) {
      var a = el[0].childNodes[l];
      if (a.nodeName !== '#text') {
        temp += '<' + a.nodeName;
        for (var j = 0; j < a.attributes.length; j++) {
          temp += ' ' + a.attributes[j].name + '="' + (a.attributes[j].value) + '"';
        }
        temp += '></' + a.nodeName + '>';
      }
    }

    temp += '\n</svg>\n</div>';

    if ($t.data('position') === 'a') {
      $t.append(temp);
    } else {
      $t.prepend(temp);
    }
  })
};


app.cdnInit = function () {
  if (!app.cdn) {
    var link = $('#cdnUrl').attr('src');
    if (link) app.cdn = link.replace('js/common.js', '');
  }
};


app.init = function () {
  var _t = this,
  setting = {
    ico: {
      selector: '[data-svg]',
      sprite: '#sprite'
    },
  };

  function device() {
    for (var key in _t.deviceDB) {
      if (_t.deviceDB.hasOwnProperty(key) && _t.deviceDB[key] < window.innerWidth) return key;
    }
  }


  _t.device = device();
  _t.progressBox = $(setting.progress);

  _t.cdnInit();
  _t.genIco(setting.ico);


  $(setting.butToForm).on('touchend click', function (e) {
    e.preventDefault();
    _t.scrollTo('.form__wrap', -20);
  });
};


$(function () {
  app.init();
});
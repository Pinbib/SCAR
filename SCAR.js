//main
class SCAR {
  constructor(version) {
    this._v = version;
  };
  generation(mainFile, name, [author], description, structorFolder) {
    var json = {
      'MAINFILE': {
        'file': mainFile,
        'typeFile': mainFile.split('.').pop(),
      },
      'NAME': name.split(' ').join(''),
      'VERSION': this._v,
      'AUTHOR': author.join(' , '),
      'DESCRIPTION': description,
      'STRUCTOR': structorFolder.split('').join(''),
    }
    return json;
  };
  rakt() {
    document.body.style.margin = '0';
    document.body.style.bottom = '0';
  };
  createBoard() {
    var board = document.createElement('div');
    board.className = 'display';
    board.id = 'display';
    board.style.width = '100vw';
    board.style.height = '100vh';
    document.body.append(board);
  }
};
//sprite
class Sprite {
  constructor(src, id, layer) {
    this.src = src;
    this.id = id;
    this.layer = layer;
  };
  insert() {
    var sprite = document.createElement('img');
    sprite.src = this.src;
    sprite.id = this.id;
    sprite.className = 'sprite'
    sprite.style.zIndex = this.layer;
    sprite.style.position = 'absolute';
    document.querySelector('.display').append(sprite);
  };
  size(height, width) {
    document.getElementById(this.id).style.height = height;
    document.getElementById(this.id).style.width = width;
  };
  position([x, y]) {
    document.getElementById(this.id).style.marginLeft = x;
    document.getElementById(this.id).style.marginTop = y;
  };
  traffic([x, y], fps) {
    var sprite = document.getElementById(this.id);
    var posX = parseInt(sprite.style.marginLeft);
    var posY = parseInt(sprite.style.marginTop);
    var move = setInterval(() => {
      if (posX == parseInt(x) && posY == parseInt(y)) {
        clearInterval(move)
      } else {
        posX++;
        posY++;
        sprite.style.marginLeft = posY + 'px';
        sprite.style.marginTop = posY + 'px';
      }
    }, 1000 / fps);
  };
  moveX(fps, x) {
    var sprite = document.getElementById(this.id);
    var posX = parseInt(sprite.style.marginLeft);
    var move = setInterval(() => {
      if (posX == parseInt(x)) {
        clearInterval(move);
      } else {
        posX++;
        sprite.style.marginLeft = posX + 'px';
      }
    }, 1000 / fps)
    return true;
  };
  moveY(fps, y) {
    var sprite = document.getElementById(this.id);
    var posY = parseInt(sprite.style.marginTop);
    var move = setInterval(() => {
      if (posY == parseInt(y)) {
        clearInterval(move);
      } else {
        posY++;
        sprite.style.marginTop = posY + 'px';
      }
    }, 1000 / fps)
    return true;
  };
  Xmove(fps, x) {
    var sprite = document.getElementById(this.id);
    var posX = parseInt(sprite.style.marginLeft);
    var move = setInterval(() => {
      if (posX == parseInt(x)) {
        clearInterval(move);
      } else {
        posX--;
        sprite.style.marginLeft = posX + 'px';
      }
    }, 1000 / fps)
    return true;
  };
  Ymove(fps, y) {
    var sprite = document.getElementById(this.id);
    var posY = parseInt(sprite.style.marginTop);
    var move = setInterval(() => {
      if (posY == parseInt(y)) {
        clearInterval(move);
      } else {
        posY--;
        sprite.style.marginTop = posY + 'px';
      }
    }, 1000 / fps)
    return true;
  };
  touch(id, func, fps) {
    var interval = setInterval(() => {
      var sprite = document.getElementById(this.id);
      var sprite1 = document.getElementById(id);
      if (sprite.style.marginLeft == sprite1.style.marginLeft && sprite.style.marginTop == sprite1.style.marginTop) {
        clearInterval(interval);
        func();
      }
    }, 1000 / fps)
  }
};

class Block {
  constructor(id, layer) {
    this.id = id;
    this.layer = layer;
  };
  text(text) {
    var block = document.createElement('div');
    block.id = this.id;
    block.className = 'block';
    block.style.zIndex = this.layer;
    block.style.position = 'absolute'
    block.innerHTML = text;
    document.getElementById('display').append(block);
  };
  delet() {
    document.getElementById(this.id).style.layer = 0;
    document.getElementById(this.id).style.display = 'none';
  };
  put() {
    document.getElementById(this.id).style.layer = this.layer;
    document.getElementById(this.id).style.display = 'block';
  };
  size(height, width) {
    document.getElementById(this.id).style.height = height;
    document.getElementById(this.id).style.width = width;
  };
  position([x, y]) {
    document.getElementById(this.id).style.marginLeft = x;
    document.getElementById(this.id).style.marginTop = y;
  };
  traffic([x, y], fps) {
    var sprite = document.getElementById(this.id);
    var posX = parseInt(sprite.style.marginLeft);
    var posY = parseInt(sprite.style.marginTop);
    var move = setInterval(() => {
      if (posX == parseInt(x) && posY == parseInt(y)) {
        clearInterval(move)
      } else {
        posX++;
        posY++;
        sprite.style.marginLeft = posY + 'px';
        sprite.style.marginTop = posY + 'px';
      }
    }, 1000 / fps);
  };
  moveX(fps, x) {
    var sprite = document.getElementById(this.id);
    var posX = parseInt(sprite.style.marginLeft);
    var move = setInterval(() => {
      if (posX == parseInt(x)) {
        clearInterval(move);
      } else {
        posX++;
        sprite.style.marginLeft = posX + 'px';
      }
    }, 1000 / fps)
    return true;
  };
  moveY(fps, y) {
    var sprite = document.getElementById(this.id);
    var posY = parseInt(sprite.style.marginTop);
    var move = setInterval(() => {
      if (posY == parseInt(y)) {
        clearInterval(move);
      } else {
        posY++;
        sprite.style.marginTop = posY + 'px';
      }
    }, 1000 / fps)
    return true;
  };
  Xmove(fps, x) {
    var sprite = document.getElementById(this.id);
    var posX = parseInt(sprite.style.marginLeft);
    var move = setInterval(() => {
      if (posX == parseInt(x)) {
        clearInterval(move);
      } else {
        posX--;
        sprite.style.marginLeft = posX + 'px';
      }
    }, 1000 / fps)
    return true;
  };
  Ymove(fps, y) {
    var sprite = document.getElementById(this.id);
    var posY = parseInt(sprite.style.marginTop);
    var move = setInterval(() => {
      if (posY == parseInt(y)) {
        clearInterval(move);
      } else {
        posY--;
        sprite.style.marginTop = posY + 'px';
      }
    }, 1000 / fps)
    return true;
  };
  touch(id, func, fps) {
    var interval = setInterval(() => {
      var sprite = document.getElementById(this.id);
      var sprite1 = document.getElementById(id);
      if (sprite.style.marginLeft == sprite1.style.marginLeft && sprite.style.marginTop == sprite1.style.marginTop) {
        clearInterval(interval);
        func();
      }
    }, 1000 / fps)
  }
}

class Keyboard {
  constructor() { };
  a(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyA') {
        func();
      }
    })
  };
  b(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyB') {
        func();
      }
    })
  };
  c(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyC') {
        func();
      }
    })
  };
  d(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyD') {
        func();
      }
    })
  };
  e(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyE') {
        func();
      }
    })
  };
  f(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyF') {
        func();
      }
    })
  };
  g(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyG') {
        func();
      }
    })
  };
  h(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyH') {
        func();
      }
    })
  };
  i(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyI') {
        func();
      }
    })
  };
  j(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyJ') {
        func();
      }
    })
  };
  k(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyK') {
        func();
      }
    })
  };
  l(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyL') {
        func();
      }
    })
  };
  m(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyM') {
        func();
      }
    })
  };
  n(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyN') {
        func();
      }
    })
  };
  o(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyO') {
        func();
      }
    })
  };
  p(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyP') {
        func();
      }
    })
  };
  q(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyQ') {
        func();
      }
    })
  };
  r(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyR') {
        func();
      }
    })
  };
  s(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyS') {
        func();
      }
    })
  };
  t(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyT') {
        func();
      }
    })
  };
  u(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyU') {
        func();
      }
    })
  };
  v(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyV') {
        func();
      }
    })
  };
  w(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyW') {
        func();
      }
    })
  };
  x(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyX') {
        func();
      }
    })
  };
  y(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyY') {
        func();
      }
    })
  };
  z(func) {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyZ') {
        func();
      }
    })
  };

};


class QuickFile {
  constructor(text = '', fileName) {
    this.text = text;
    this.fileName = fileName;
  };
  start() {
    let link = document.createElement('a');
    link.download = this.fileName;

    let blob = new Blob([this.text], { type: 'application/download' });

    link.href = URL.createObjectURL(blob);

    link.click();

    URL.revokeObjectURL(link.href);
  }
}

/*

*/
import uniqid from "uniqid";

function getNewBullet() {
  return { id: uniqid(), text: '' };
}

function getBulletList(num) {
  const list = [];
  for (let i = 0; i < num; ++i) {
    list.push(getNewBullet());
  }
  return list;
}

function getWorkObj(index) {
  const bullets =[];
  for (let i = 0; i < 4 - index; ++i) {
    bullets.push({id: uniqid(), text: ''});
  }

  return {
    name: '',
    title: '',
    duration: '',
    address: '',
    bullets,
  };
}

function getProjObj() {
  const bullets = [];
  for (let i = 0; i < 3; ++i) {
    bullets.push(getNewBullet());
  }

  return {
    name: '',
    tech: '',
    code: { text: '', link: '' },
    demo: { text: '', link: '' },
    bullets,
  };
}

function getEduObj() {
  const bullets = [];
  for (let i = 0; i < 3; ++i) {
    bullets.push(getNewBullet());
  }

  return {
    name: '',
    degree: '',
    grad: '',
    address: '',
    bullets,
  };
}

export { getNewBullet, getBulletList, getWorkObj,
  getProjObj, getEduObj };
const name = ['Global', 'South Hemispheres', 'North Hemispheres'];
const keys = ['Glob', 'NHem', 'SHem'];
const metaSet = name.map(d => [d]);

function mapperY(data) {
  return data.reduce((acc, cur) => {
    keys.forEach((key, idx) => acc[idx].push(cur[key]));
    return acc;
  }, metaSet);
}

function mapperX(data) {
  return ['x'].concat(data.map( d => d['Year']));
}

const xs = name.reduce((acc, cur) => {
  acc[cur] = 'x';
  return acc;
}, {});

const yPosition = mapperY(data);
const xPosition = mapperX(data);

const columns = [xPosition].concat(yPosition);

const chart = c3.generate({
  bindto: '#chart',
  data: {
    columns,
    xs,
  },
  axis: {
    x: {
      label: 'time'
    },
    y: {
      label: 'temperature(s) °F'
    },
  }
});

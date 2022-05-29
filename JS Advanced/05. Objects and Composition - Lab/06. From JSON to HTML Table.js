function fromJSONToHTMLTable(objects) {
  const array = JSON.parse(objects);

  let output = ['<table>'];

  output.push(makeHeaderRows(array));
  array.forEach((row) => output.push(makeDataRows(row)));
  output.push('</table>');

  console.log(output.join('\n'));

  function makeHeaderRows(array) {
    let result = '   <tr>';

    let names = Object.keys(array[0]);
    names.forEach(key => { result += `<th>${escapeFunc(key)}</th>` });

    result += '</tr>'

    return result;
  }

  function makeDataRows(data) {
    let result = '   <tr>';

    let scores = Object.values(data);
    scores.forEach(value => { result += `<td>${escapeFunc(value)}</td>`; });

    result += '</tr>';

    return result;
  }

  function escapeFunc(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}


fromJSONToHTMLTable(`[
  {"Name":"Stamat","Score":5.5},
  {"Name":"Rumen","Score":6}]`);

fromJSONToHTMLTable(`[
  {"Name":"Pesho", "Score":4, " Grade":8},
  {"Name":"Gosho", "Score":5, " Grade":8},
  {"Name":"Angel", "Score":5.50, " Grade":10}]`);
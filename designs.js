// Select size input
const table = document.getElementById('pixelCanvas');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const size = document.getElementById('sizePicker');
// Select color input
const color = document.getElementById('colorPicker');
//when size is submitted by the user, call makeGrid()
size.addEventListener('submit', function (x) {
  table.innerHTML = '';
  x.preventDefault();
  makeGrid();
})
// looks for if TD is clicked and changes its color
table.addEventListener('click', function (x) {
  if (x.target.nodeName === 'TD') {
    x.target.style.backgroundColor = color.value;
  }
});
// makes table: for loop inserts rows <tr> and inserts cells <td>
function makeGrid(){
  for (let i = 0; i < height.value; i++) {
    const row = table.insertRow(0);
    for (let ii = 0; ii < width.value; ii++) {
      row.insertCell(0);
    }
  }
}

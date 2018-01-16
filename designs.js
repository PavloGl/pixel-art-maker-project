/**
 * @description Checking if number meets requirements
 * @param   {number} val Checked number
 * @param   {number} min Minimum value
 * @param   {number} max Maximum value
 * @returns {number} Checked number if it mets requirments, 
 * else min value if number is less, otherwise max
 */
function value_limit(val, min, max) {
  return val < min ? min : (val > max ? max : val);
}

/**
* @description Tests if input passes requirements
*/
$('#input_height').keyup(function(e) {
    let help = parseInt($(this).val());
    help = value_limit(help, 1, 15);
    $(this).val(help);
});

/**
* @description Tests if input passes requirements
*/
$('#input_width').keyup(function(e) {
    let help = parseInt($(this).val());
    help = value_limit(help, 1, 80);
    $(this).val(help);
});

/**
* @description Deletes all table rows
*/
function cleanGrid() {
  $('tr').remove();
}

/**
* @description Creates grid
*/
function makeGrid() { 
  //cleaning up.    
  cleanGrid();
  
  //getting values.
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  let col = $('#colorPicker').val();
  let canvas = $('#pixel_canvas');
  
  //setting up table rows.
  for(let x = 0; height > x; ++x) {
    canvas.append('<tr></tr>');
  }
  
  //setting up table data.
  canvas.children('tr').each(function(){
    for(let y = 0; width > y; ++y) {
      $(this).append('<td></td>');
    }
  }); 
  
  /**
  * @description Drawing using clicks.
  */
  $('td').click(function(){
        let col = $('#colorPicker').val();
        $(this).css('background-color', col);
    });
  
  /**
  * @description Starting part of click and drag function, next part below.
  */
  $('td').mousedown(function(event){
      if(event.buttons){
        let col = $('#colorPicker').val();
        $(this).css('background-color',col);
      }
    });
  
  /**
  * @description End point of click and drag function.
  */    
  $('td').mouseover(function(event){
        if(event.buttons){
            let col = $('#colorPicker').val();
            $(this).css('background-color', col);
        }
    });
  
  return false;
};

/**
* @description Setting up makeGrid function to start from click
*/
$('#createGrid').click(makeGrid);
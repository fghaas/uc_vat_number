
$(document).ready(
  function() {
    $('#edit-panes-billing-billing-country').change(updateVatField)
  }
);

function updateVatField() {
  var in_europe = false;
  for(var country_id in european_countries) {
    if(european_countries[country_id] == $('#edit-panes-billing-billing-country').val()) {
      in_europe = true;
    }
  }
  if(in_europe == true) {
    $('#vat_number-pane').fadeIn();
  } else {
    $('#vat_number-pane').fadeOut();
  }
}

$(document).ready(function() {
  $("input[name*=vat_number]").change(getTax);
});


function uc_vat_number__serializeOrder() {
  var order = __serializeOrder();
  /* $order is a PHP serialize()d object. Patch it to include the VAT number. */
  /* Disclaimer: YIKES!!!! Post an issue in the uc_var_module queue if you have a better solution... */
  /*   first increment the number of elements in the object */
  var re = /^O:8:"stdClass":([0-9]+):/;
  var numEle = order.match(re);
  order = order.replace(re, 'O:8:"stdClass":'+(parseInt(numEle[1])+1)+':');
  /*   now add the VAT number (inside the 'data' array) at the end of the object */
  var b_vat =  $("input[name*=vat_number]").val() || '';
  order = order.replace(/}$/, 's:4:"data";a:1:{s:10:"vat_number";s:' + b_vat.bytes() + ':"' + b_vat + '";}}');
  return order;
}

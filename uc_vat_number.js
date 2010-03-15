// $Id$

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

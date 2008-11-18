/*List of European countries (in order of the array)
	Allemagne
	Autriche
	Belgique
	Danemark
	Espagne
	Finlande
	France
	Grce
	Irlande
	Italie
	Luxembourg
	Pays-Bas
	Portugal
	Royaume-Uni
	Sude
	Chypre
	Estonie
	Hongrie
	Lettonie
	Lituanie
	Malte
	Pologne
	Rpublique tchque
	Slovaquie
	Slovnie*/

$(document).ready(
  function() {
    var european_countries = [276, 040, 056, 208, 724, 246, 250, 300, 372, 380, 442, 528, 620, 826, 752, 196, 233, 348, 428, 440, 470, 616, 203, 703, 705];
    var vat_label =$('#billing-pane tr:last td.field-label').html();
    $('#edit-panes-billing-billing-country').change(function () {
      var in_europe = false;
      for(var country_id in european_countries) {
        if(european_countries[country_id] == $('#edit-panes-billing-billing-country').val()) {
          in_europe = true;
        }
      }
      if(in_europe == true) {
        $('#billing-pane tr:last td.field-label').html('<span class="form-required">*</span>' + vat_label);
       //alert(vat_label);
        $('#billing-pane tr:last').fadeIn();
      } else {
        $('#billing-pane tr:last').fadeOut();
      }
    })
  }
);
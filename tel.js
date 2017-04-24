<script>
jQuery('button[name="telannonce"]').click(function() {
    
	var a = jQuery(this).attr("id");
	swal({
	  title: "<div style='#25B45B'><i class='fa fa-phone fa-2x'></i></div>",
	  text: "Pour afficher le numéro Insérez votre téléphone",
	  type: "input",
	  inputType: "number",
	  confirmButtonText: "Suivant",
	  showCancelButton: false,
	  closeOnConfirm: false,
	  animation: "slide-from-top",
	  inputPlaceholder: "+216 XX XXX XXX",
	  html: !0
	},
	function(inputValue){
		if (inputValue === false) return false;
	  
		if (inputValue === "") {
			swal.showInputError("Numéro de téléphone invalide!");
			return false
		}
	  
		swal({
			title: "<div style='#25B45B'><i class='fa fa-phone fa-2x'></i></div>",
			<?php if ( wp_is_mobile() ) : ?>
			text: '<h1><a href="tel:' + a + '">' + a + "</a></h1>",
			<?php else : ?>
			text: "<h1>" + a + "</h1>",
			<?php endif; ?>
			html: !0
		})
		jQuery.getJSON("http://jsonip.com?callback=?", function(a) {
			ip = a.ip, console.log(ip), addrec(ip,inputValue)
		});
	});
});

function addrec(a,x) {
	var mail = "<?php $email = get_the_author_meta( 'user_email', $author_id );echo $email?>";
    var b = new Date,
        c = b.getMonth() + 1,
        d = b.getDate(),
        e = b.getFullYear() + "/" + (("" + c).length < 2 ? "0" : "") + c + "/" + (("" + d).length < 2 ? "0" : "") + d,
        f = e,
        g = navigator.platform;
	console.log(g);
    var h = window.location.href,
        i = "date=" + f + "&id=" + h + "&ip=" + a + "&tel=" + x + "&m=" + mail;
    console.log(i), jQuery.ajax({
        type: "GET",
        url: "http://www.bnb.tn/counter.php",
        data: i,
        success: function() {
            console.log("Ajax Success")
        }
    })
}
</script>

$(document).ready(function () {
    $("#back, #front").click(function () {
        if (this.id == "back") {
            $(".flip-container").addClass("flip");
        }
        else if (this.id == "front") {
            $(".flip-container").removeClass("flip");
        }
    });
    $("#name, #number, #month, #cvv, #year").bind("change paste keyup", function () {
        if (this.id == "name") {
            $(".card__name").text($(this).val());
        }
        else if (this.id == "number") {
            var VISA_PREFIXES = ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"]; // Prefixes for VISA cards
            var MC_PREFIXES = ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]; // Prefixes for Master Card cards
            var field_value = $(this).val();

            if (field_value.charAt(0) === "4" && field_value.length >= 2) {
                var prefix = field_value.slice(0, 4);

                if (VISA_PREFIXES.includes(prefix)) {
                    $("#card__image").attr("src", "/TCC/IMG/VisaCard.png");
                }
            } else if (field_value.charAt(0) === "5" && field_value.length >= 2) {
                var prefix = field_value.slice(0, 2);

                if (MC_PREFIXES.includes(prefix)) {
                    $("#card__image").attr("src", "/TCC/IMG/MasterCard.png");
                }
            } else {
                $("#card__image").attr("src", "");
            }

            $(".card__number").text(field_value);
        }
        else if (this.id == "month") {
            $(".card__month").text($(this).val());
        }
        else if (this.id == "cvv") {
            $(".card__cvv").text($(this).val());
        }
        else if (this.id == "year") {
            $(".card__year").text($(this).val());
        }
    });
});

// Card Fim

// Menu Hambúrguer

const btn = document.getElementById("b");

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btn.addEventListener('click', toggleMenu);

function ChangeBG() {
    document.getElementById('btn').classList.contains('alt')
        ? document.getElementById('btn').classList.remove('alt')
        : document.getElementById('btn').classList.add('alt');
}
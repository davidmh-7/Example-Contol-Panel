let minimizado = false;

        var rotarFlecha = document.getElementById('rotarFlecha');
        var chatBot = document.getElementById('chatBotIrun');
        chatBot.style.animation = "slide-up 0.8s ease-out forwards";
        rotarFlecha.style.animation = "rotate-back-slowly 0.6s linear forwards";
        setTimeout(function () {
            chatBot.style.transform = 'translateY(0)';
            chatBot.style.overflow = 'visible';
            minimizado = false;
            rotarFlecha.classList.remove('rotate-180');
            rotarFlecha.classList.add('rotate-120');
        }, 800);

        function ensenarChatBot() {
            var botonQuitar = document.getElementById('botonQuitar');
            var ensenarChatBot = document.getElementById('chatBotIrun');
            ensenarChatBot.style.display = 'block';
            botonQuitar.style.display = 'none';
        }

        function borrarChatbot() {
            var botonQuitar = document.getElementById('botonQuitar');
            var ensenarChatBot = document.getElementById('chatBotIrun');
            ensenarChatBot.style.display = 'none';
            botonQuitar.style.display = 'block';

            if (minimizado == false) {

                var rotarFlecha = document.getElementById('rotarFlecha');
                var chatBot = document.getElementById('chatBotIrun');
                chatBot.style.transform = 'translateY(0)';
                chatBot.style.overflow = 'visible';
                rotarFlecha.classList.remove('rotate-180');
                rotarFlecha.classList.add('rotate-120');

            } else {
                var rotarFlecha = document.getElementById('rotarFlecha');
                var chatBot = document.getElementById('chatBotIrun');
                chatBot.style.animation = "slide-up 0.8s ease-out forwards";
                rotarFlecha.style.animation = "rotate-back-slowly 0.6s linear forwards";
                setTimeout(function () {
                    chatBot.style.transform = 'translateY(0)';
                    chatBot.style.overflow = 'visible';
                    minimizado = false;
                    rotarFlecha.classList.remove('rotate-180');
                    rotarFlecha.classList.add('rotate-120');
                }, 800);

            }

        }

        function minimizarChatbot() {
            if (minimizado == false) {
                var rotarFlecha = document.getElementById('rotarFlecha');
                var chatBot = document.getElementById('chatBotIrun');
                chatBot.style.animation = "slide-down 0.7s ease-out forwards";
                rotarFlecha.style.animation = "rotate-slowly 0.6s linear forwards";
                setTimeout(function () {
                    chatBot.style.transform = 'translateY(calc(100% - 70px))';
                    chatBot.style.overflow = 'hidden';
                    minimizado = true;
                    rotarFlecha.classList.remove('transform');
                    rotarFlecha.classList.remove('rotate-120');

                }, 700);
            }
            // Resto del código para manejar el caso cuando ya está minimizado

            if (minimizado == true) {
                var rotarFlecha = document.getElementById('rotarFlecha');
                var chatBot = document.getElementById('chatBotIrun');
                chatBot.style.animation = "slide-up 0.8s ease-out forwards";
                rotarFlecha.style.animation = "rotate-back-slowly 0.6s linear forwards";
                setTimeout(function () {
                    chatBot.style.transform = 'translateY(0)';
                    chatBot.style.overflow = 'visible';
                    minimizado = false;
                    rotarFlecha.classList.remove('rotate-180');
                    rotarFlecha.classList.add('rotate-120');
                }, 800);
            }
        }

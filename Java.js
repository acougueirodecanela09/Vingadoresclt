function showDialogue(character) {
        const dialogueBox = document.getElementById('dialogue');
            let dialogueText = '';

                switch(character) {
                        case 'ironman':
                                    dialogueText = "Ironman: Direitos trabalhistas são fundamentais para garantir a justiça no trabalho, como o direito ao FGTS.";
                                                break;
                                                        case 'captain':
                                                                    dialogueText = "Capitão América: No Brasil, a jornada máxima de trabalho é de 8 horas por dia, com direito a intervalos.";
                                                                                break;
                                                                                        case 'thor':
                                                                                                    dialogueText = "Thor: Todo trabalhador tem direito a férias remuneradas e ao décimo terceiro salário. Proteger os trabalhadores é proteger Midgard!";
                                                                                                                break;
                                                                                                                        default:
                                                                                                                                    dialogueText = "Clique em um Vingador para saber mais sobre direitos trabalhistas!";
                                                                                                                                        }

                                                                                                                                            dialogueBox.textContent = dialogueText;
                                                                                                                                            }



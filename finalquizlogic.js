 <script>
        const questions = [
            {
                question: "What is the capital of France?",
                answers: ["London", "Paris", "Berlin", "Madrid"],
                correctAnswer: 1 // Index of the correct answer
            },
            {
                question: "Which planet is known as the red planet?",
                answers: ["Mars", "Earth", "Jupiter", "Venus"],
                correctAnswer: 0 // Index of the correct answer
            },
            {
                question: "What is the largest mammal?",
                answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                correctAnswer: 1 // Index of the correct answer
            },
            {
                question: "Who painted the Mona Lisa?",
                answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
                correctAnswer: 0 // Index of the correct answer
            }
	    {
                question: "What is the Financial Capital of India?",
                answers: ["Delhi", "Kolkata", "Mumbai", "Hyderabad", "Bangalore", "Chennai"],
                correctAnswer: 2 // Index of the correct answer
            }
        ];

        let currentQuestion = 0;
        let userAnswers = new Array(questions.length);

        const questionElem = document.getElementById('question');
        const answersElem = document.getElementById('answers');
        const previousBtn = document.getElementById('previous');
        const nextBtn = document.getElementById('next');
        const submitBtn = document.getElementById('submit');
        const scoreElem = document.getElementById('score');

        function showQuestion() {
            const current = questions[currentQuestion];
            questionElem.textContent = current.question;
            answersElem.innerHTML = "";
            current.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.textContent = answer;
                button.classList.add('answer');
                button.addEventListener('click', () => selectAnswer(index));
                answersElem.appendChild(button);
            });

            if (currentQuestion === 0) {
                previousBtn.style.display = 'none';
            } else {
                previousBtn.style.display = 'inline-block';
            }

            if (currentQuestion === questions.length - 1) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-block';
            } else {
                nextBtn.style.display = 'inline-block';
                submitBtn.style.display = 'none';
            }
        }

        function selectAnswer(index) {
            userAnswers[currentQuestion] = index;
            const buttons = answersElem.querySelectorAll('.answer');
            buttons.forEach((button, i) => {
                if (i === index) {
                    button.style.backgroundColor = '#4CAF50';
                } else {
                    button.style.backgroundColor = '#f9f9f9';
                }
            });
        }

        function showScore() {
            let score = 0;
            userAnswers.forEach((answer, index) => {
                if (answer === questions[index].correctAnswer) {
                    score++;
                }
            });
            scoreElem.textContent = `Your final score is: ${score} out of ${questions.length}`;
        }

        previousBtn.addEventListener('click', () => {
            if (currentQuestion > 0) {
                currentQuestion--;
                showQuestion();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
            }
        });

        submitBtn.addEventListener('click', () => {
            showScore();
        });

        showQuestion();
    </script>
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImage = document.querySelectorAll(".option_image");

optionImage.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "/image/rock.png";
    result.textContent = "Wait...";

    optionImage.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // set timeout to delay result calclution
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      // genarate random number
      let randomNumber = Math.floor(Math.random() * 3);

      // cpu iamge
      let cpuImage = [
        "/image/rock.png",
        "/image/paper.png",
        "/image/scissors.png",
      ];
      cpuResult.src = cpuImage[randomNumber];

      // assign a letter value to the cpu
      let cpuValue = ["R", "P", "S"][randomNumber];
      // assign a letter value to the user
      let userValue = ["R", "P", "S"][index];

      // create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      // look up the outcome value based on user and CPU option
      let outcomeValue = outcomes[userValue + cpuValue];

      // display the result
      result.textContent =
        userValue === cpuValue ? "Draw Match" : `${outcomeValue} Won!!`;
    }, 2500);
  });
});

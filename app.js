const content = document.getElementById("content");

const posts = [
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/first-photo0704.jpeg",
    comment: "My first photo with Uncle Dan",
    date: "7th April 2022",
    likes: 210,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/first-selfie1004.jpeg",
    comment: "My first ever selfie",
    date: "10th April 2022",
    likes: 500,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/dan-firstphoto1504.jpg",
    comment: "Uncle Dan's first photo of me, he really got my good side",
    date: "15th April 2022",
    likes: 300,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/second-visit1505.jpeg",
    comment:
      "Uncle Dan's second visit, I had no idea what he was going on about",
    date: "15th May 2022",
    likes: 300,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/first-visits362105.jpeg",
    comment: "My first visit to where my Daddy grew up!",
    date: "21st May 2022",
    likes: 700,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/first-laugh2705.jpg",
    comment: "The first time Uncle Dan made me laugh, he is very silly!",
    date: "27th May 2022",
    likes: 1000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/first-pub2705.jpg",
    comment:
      "I walked to the pub with Mummy and Uncle Dan, that drink looked tasty!",
    date: "27th May 2022",
    likes: 2500,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/funky-lid0322.jpg",
    comment: "Chillin' in the garden with me funky new lid!",
    date: "3rd June 2022",
    likes: 2000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/clubcard0306.jpg",
    comment: "Daddy has a Tesco Club Card apparently 🤷",
    date: "3rd June 2022",
    likes: 5000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/twin1207.jpeg",
    comment: "With me twin, lol",
    date: "12th July 2022",
    likes: 5000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/canonball1407.jpeg",
    comment: "Check out me new babygrow #cannonball",
    date: "12th July 2022",
    likes: 25000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/still-sill2307.jpg",
    comment: "Uncle Dan is still very silly",
    date: "23rd July 2022",
    likes: 1000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/seat0508.jpg",
    comment: "Found a reight comfy chair",
    date: "5th August 2022",
    likes: 3000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/football0608.jpeg",
    comment:
      "Went to the pub with Mummy, Daddy, Uncle Dan and Uncle Mike.  Had a reight laugh!",
    date: "5th August 2022",
    likes: 10000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/own-selfie1008.jpg",
    comment: "My very first attempt at doing a selfie mesen",
    date: "10th August 2022",
    likes: 10000000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/bday1508.jpg",
    comment: "Today I went to the pub for Uncle Dan's birthday",
    date: "15th August 2022",
    likes: 8000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/upsidedown1808.jpeg",
    comment: "In the upside-down #strangerthings",
    date: "18th August 2022",
    likes: 18000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/hungry2108.jpg",
    comment: "#bloodyhungry",
    date: "21st August 2022",
    likes: 5000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/boobies.jpg",
    comment: "Daddy is looking a boobies heh heh",
    date: "4th September 2022",
    likes: 5000000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/dem2210.jpg",
    comment: "Watching Dem Blayards #SUFC",
    date: "22nd October 2022",
    likes: 2500,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/nan2310.jpg",
    comment: "Spending quality time with Great Nanan",
    date: "23rd October 2022",
    likes: 10000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/gdad.jpg",
    comment: "Watching telly with Great Grandad",
    date: "23rd October 2022",
    likes: 9000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/hween3110.jpg",
    comment: "My first Halloween",
    date: "29th October 2022",
    likes: 33000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/pkin.jpg",
    comment: "I do not like pumpkin chairs",
    date: "3rd November 2022",
    likes: 45000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/good-selfie0411.jpg",
    comment: "I have now mastered the selfie!",
    date: "4th November 2022",
    likes: 15000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/bear.jpg",
    comment: "Today I met a Grizzly Bear",
    date: "6th November 2022",
    likes: 150000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/discuss312.jpg",
    comment: "Deciding what to eat at the pub tomorrow!",
    date: "3rd December 2022",
    likes: 1000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/nan-pub0412.jpg",
    comment: "At the pub with Great Nan!",
    date: "4th December 2022",
    likes: 4000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/table412.jpg",
    comment: "Gonna eat table",
    date: "4th December 2022",
    likes: 14000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/bungalow1012.jpg",
    comment: "Chillin at Bungalows and Bears",
    date: "10th December 2022",
    likes: 77000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/xmas.jpg",
    comment: "Merry Happy everyone!",
    date: "11th December 2022",
    likes: 39000,
  },
  {
    name: "Freddie Campbell",
    username: "FreddleChops",
    location: "Sheffield",
    avatar: "images/avatar.jpg",
    post: "images/snack.jpg",
    comment: "Having a snack on Daddy's birthday!",
    date: "11th December 2022",
    likes: 39000,
  },
];

function renderContent() {
  let section = "";
  for (let i = 0; i < posts.length; i++) {
    section += `
      <section id="section">
      <div id="posts">
        <div class="flex-row">
          <img
            class="avatar"
            src=${posts[i].avatar}
            alt=""
          />
          <p id="name" class="bold">
            ${posts[i].name} <span id="location">${posts[i].location}</span>
          </p>
        </div>
        <img
          class="post-img"
          src=${posts[i].post}
          alt=""
        />
        <div id="icons">
          <img class="icons" src="images/icon-heart.png" alt="like icon" />
          <img
            class="icons"
            src="images/icon-comment.png"
            alt="comment icon"
          />
          <img class="icons" src="images/icon-dm.png" alt="message icon" />
        </div>
        <div class="user-interaction">
          <p class="bold">${posts[i].date}</p>
          <p class="bold">${posts[i].likes} likes</p>
          <p><span class="bold">${posts[i].username} says</span> ${posts[i].comment}</p>
        </div>
      </div>
    </section>
`;
  }
  content.innerHTML = section;
}

renderContent();

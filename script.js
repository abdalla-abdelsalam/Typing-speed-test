
const typingDiv=document.getElementById("typing")
const statsDiv=document.getElementById("stats")
const startGamebtn=document.getElementById("startGamebtn")
const title=document.querySelector("h1")
const paragraphs=[
    "With a good introduction you make sure that your audience will get curious about the rest of the text. A good introduction briefly tells you what text is about, but it doesn't release too much information yet. This is also a way to deliver your story, your target audience can determine quickly whether your text provides information that is important to them",
    "Meaningful relationships are what matter most. Showing the people around you that you care about them and that you're willing to put them first, is the mark of a true leader. Great leaders are vulnerable and unselfish. Ultimately, they thrive by exhibiting this behavior and in so doing, they earn the respect of all",
    "Being useful is a mindset. And like with any mindset, it starts with a decision. One day I woke up and thought to myself: What am I doing for this world? The answer was nothing",
    "I don't know about you, but balance in life makes it easier. If you like to chill a lot, try to mix it up with more hustle. If you're the opposite, try to find pauses during the day. The more you experiment, the better you understand my intuition says.",
    "If you look at culture change as a series of successful habit shifts, the process of making it a reality starts to feel more achievable. The impact of one small change across every team in your organization means hundreds or thousands of interactions shifting to align with the culture you want. It's not simple, but there are practical approaches you can take to move the needle"
]

const initialize=()=>{
    title.classList.add("hidden")
    startGamebtn.classList.add("hidden")
    statsDiv.classList.add("hidden")
    typingDiv.classList.remove("hidden")
    typingDiv.innerHTML=""
}

const startGame=()=>{
   initialize()
    const text=paragraphs[Math.floor(Math.random() * paragraphs.length)]

    const characters=text.split("").map((char)=>{
        const span=document.createElement("span");
        span.innerText=char;
        typingDiv.appendChild(span)
        return span
    });
    //color: rgb(88, 85, 85);
    let cursorIndex=0;
    let cursorCharacter=characters[cursorIndex];
    cursorCharacter.classList.add('cursor')
    let start_time=null;
    let end_time=null;
    const keydown=({key})=>{
            if(!start_time)
            {
                start_time=new Date();
            }
            if(key===cursorCharacter.innerText)
            {
                cursorCharacter.classList.remove('cursor');
                cursorCharacter.classList.add('done');
                cursorCharacter=characters[++cursorIndex];
            }
            if(cursorIndex>=characters.length)
            {
                end_time=new Date();
                const delta=end_time-start_time
                const seconds=delta/1000;
                const numberofwords=text.split(' ').length
                const wps=numberofwords/seconds;
                const wpm=wps*60;
                statsDiv.classList.remove("hidden")
                typingDiv.classList.add("hidden")
                statsDiv.innerText=`Your typing speed is ${parseInt(wpm)} WPM`
                document.removeEventListener("keydown",keydown)
                startGamebtn.classList.remove("hidden")
                return
            }
            cursorCharacter.classList.add('cursor')
    }
    document.addEventListener("keydown",keydown)
    }
   
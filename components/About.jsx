import Image from "next/image";

export default function About() {
  return (
    <div className="aboutMain">
      <div className="aboutimage">
         <Image src="/portimage.jpg" width={500} height={500}/>
      </div>
      <div className="aboutdesc">
        <h1>About Me</h1>
        <p>I am a versatile tech professional with a strong background in web and mobile app development,
             coupled with expertise in Microsoft technologies. Proficient in languages such as Python, JavaScript ,Kotlin, 
             I excel in creating responsive websites and user-friendly applications for platforms like and Android,
              utilizing frameworks like Kotlin Flutter</p><br/>
        <p>Additionally, my proficiency extends to leveraging Microsoft tools such as BC Azure, Visual Studio, SQL  to optimize processes and enhance productivity. I bring a dynamic and collaborative approach to every project, ensuring innovative solutions that align with business goals and exceed expectations.</p>
        <div className="aboutbtns">
            <button className="hire">Hire me</button>
            <button className="cv">Download CV</button>
      </div>
      </div>
      
    </div>
  )
}

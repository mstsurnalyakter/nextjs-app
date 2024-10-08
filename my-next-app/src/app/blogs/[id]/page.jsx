import React from 'react'

const DetailsPage = ({params}) => {
    const id = parseFloat(params.id);
    const{title,scenario,description,more_you_like_to_add} = blogs.find(blog=>blog.id === id);
    console.log(id);
    console.log(1);
  return (
    <div className='w-4/5 mx-auto space-y-3 border-2 p-5'>
        <h1>{title}</h1>
        <p>{scenario}</p>
        <p>{description}</p>
        <p>{more_you_like_to_add}</p>
    </div>
  )
}

const blogs = [
  {
    id: 1,
    title: "Handling an Unexpected Deadline",
    scenario:
      "You are assigned a task with a tight deadline that you weren’t expecting.",
    description:
      "Break down the task into manageable steps. Prioritize the most critical components and communicate with your manager about any potential bottlenecks. Stay focused, avoid distractions, and aim for efficiency.",
    more_you_like_to_add:
      "Consider delegating less critical tasks or asking for help if needed to ensure the deadline is met.",
  },
  {
    id: 2,
    title: "Approaching a Difficult Conversation",
    scenario: "You need to discuss a sensitive issue with a family member.",
    description:
      "Choose an appropriate time and setting where you can talk privately and calmly. Start the conversation with empathy, clearly state your concerns, and listen actively to their perspective without interrupting.",
    more_you_like_to_add:
      "Avoid accusatory language and stay focused on finding a resolution together.",
  },
  {
    id: 3,
    title: "Responding to Negative Feedback",
    scenario: "You receive harsh criticism about your work performance.",
    description:
      "Take a moment to process the feedback without reacting defensively. Thank the person for their input, ask for clarification if needed, and assess how you can improve based on their comments.",
    more_you_like_to_add:
      "Use the feedback as a learning opportunity to grow and enhance your skills.",
  },
  {
    id: 4,
    title: "Dealing with a Public Speaking Situation",
    scenario:
      "You are asked to speak at an event with little preparation time.",
    description:
      "Prepare an outline of key points you want to address. Stay concise, focus on the main message, and engage the audience with eye contact. Practice briefly beforehand to build confidence.",
    more_you_like_to_add:
      "Use anecdotes or examples to make your message more relatable and memorable.",
  },
  {
    id: 5,
    title: "Navigating a Job Interview",
    scenario:
      "You have an upcoming job interview for a position you're very interested in.",
    description:
      "Research the company thoroughly, prepare answers to common interview questions, and practice articulating your skills and experiences confidently. Dress professionally and arrive early.",
    more_you_like_to_add:
      "Prepare thoughtful questions to ask the interviewer about the role or company culture.",
  },
  {
    id: 6,
    title: "Managing a Conflict Between Friends",
    scenario:
      "Two of your friends are having an argument, and you're caught in the middle.",
    description:
      "Avoid taking sides. Encourage open communication between both parties, help them understand each other's viewpoints, and mediate with a calm, neutral approach.",
    more_you_like_to_add:
      "Suggest solutions that allow both friends to compromise and resolve the conflict peacefully.",
  },
  {
    id: 7,
    title: "Addressing a Team's Lack of Motivation",
    scenario:
      "Your project team is showing signs of low morale and lack of productivity.",
    description:
      "Have an open discussion with the team to identify the root causes of the lack of motivation. Offer encouragement, redefine goals if necessary, and implement strategies that reward progress and keep the team engaged.",
    more_you_like_to_add:
      "Consider holding regular check-ins to ensure everyone feels supported and valued.",
  },
  {
    id: 8,
    title: "Handling Rejection",
    scenario: "You didn’t get the job offer after a promising interview.",
    description:
      "Accept the rejection graciously and ask for constructive feedback if possible. Use the experience as a learning opportunity, adjust your approach for future interviews, and stay motivated in your job search.",
    more_you_like_to_add:
      "Remember, rejection is part of the process, and persistence is key to finding the right opportunity.",
  },
  {
    id: 9,
    title: "Coping with Overwhelm",
    scenario:
      "You feel overwhelmed with a large workload and multiple deadlines.",
    description:
      "Take a step back to prioritize your tasks. Break them into smaller, achievable goals, and tackle them one at a time. Communicate with your manager about your capacity and delegate if needed.",
    more_you_like_to_add:
      "Incorporate short breaks into your schedule to avoid burnout and maintain productivity.",
  },
  {
    id: 10,
    title: "Approaching a New Learning Opportunity",
    scenario: "You want to learn a new skill but don’t know where to start.",
    description:
      "Research available resources like courses, tutorials, and mentors. Set a clear learning goal and break it into smaller, manageable steps. Practice consistently and track your progress.",
    more_you_like_to_add:
      "Join communities or groups related to the skill to stay motivated and share your learning journey with others.",
  },
];

export default DetailsPage
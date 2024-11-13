import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Real-time Chat Application',
        description: "Built a real-time chat app using MERN, Socket.io, Firebase, with JWT authentication and Tailwind CSS for UI,ensuring seamless messaging and robust error handling.",
        tools: ['React','Node.js','Express.js','firebase','JWT Auth','tailwind css'],
        role: 'Full stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Healthcare App in Android',
        description: 'Created a healthcare app in Android Studio using Java and SQLite to manage and track health data locally,providing easy access and offline functionality.',
        tools: ['Java','sqllite','XML','Android Studio'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Student Management Database System',
        description: '• Built a Student Management System using PHP and MySQL that streamlines enrollment, grades, and attendance management, allowing teachers to track attendance and students to access their marks efficiently.',
        tools: ['PHP','MySQL','html','css'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Gym Website',
        description: '• Developed a responsive gym website using HTML, CSS, and PHP, featuring schedules, trainer profiles, andmembership signup, with PHP handling forms and authentication.',
        tools: ['PHP','MySQL','html','css'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    address: "Some mountain",
    description: "First meetup",
  },
  {
    id: "m1",
    title: "A Second meetup",
    image:
      "https://cdn.cdnparenting.com/articles/2018/08/602444213-H-696x476.webp",
    address: "Some other mountain",
    description: "Second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10 //update information every ten seconds if it were to change
  };
}

export default HomePage;

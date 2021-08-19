import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg"
      title="First Meetup"
      address="Some mountain"
      description="First meetup"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId; //identify between square brackets in folder name
  return {
    props: {
      meetupData: {
        image: "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
        id: meetupId,
        title: "First meetup",
        address: "Some mountain",
        description: "First meetup",
      },
    },
  };
};

export default MeetupDetails;

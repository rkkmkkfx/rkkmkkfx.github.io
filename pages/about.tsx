import Head from 'next/head';

function calculateAge(birthday) { // birthday is a date
  const ageDifMs = Date.now() - birthday;
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const AboutPage = (): JSX.Element => (
  <>
    <Head>
      <title>About Me | Sergey Baranov | Web Developer</title>
    </Head>
    <h1>About me</h1>
    <p>
      Hi, my name is Sergey. I&apos;m
      {' '}
      {calculateAge(new Date(1985, 8, 14))}
      yo Web Developer from Russia/Irkutsk
    </p>
  </>
);

export default AboutPage;

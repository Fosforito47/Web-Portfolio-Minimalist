import { Grid } from "../UI/Grid";
import {
  ContentContainer,
  CardActions,
  CardButton,
  CardContainer,
  CardContent,
  CardMedia,
} from "../UI/Cards";

function Projects() {
  const cards = [
    {
      title: "Card 1",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit mollit pariatur quas cum similique duis ea occaecat aliquip dolor ea occaecat",
      buttonText: "See Project",
      ImgLink: "",
      alt: "",
    },
    {
      title: "Card 2",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit mollit pariatur quas cum similique duis ea occaecat aliquip dolor ea occaecat",
      buttonText: "See Project",
      ImgLink: "",
      alt: "",
    },
    {
      title: "Card 3",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit mollit pariatur quas cum similique duis ea occaecat aliquip dolor ea occaecat",
      buttonText: "See Project",
      ImgLink: "",
      alt: "",
    },
    {
      title: "Card 4",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit mollit pariatur quas cum similique duis ea occaecat aliquip dolor ea occaecat",
      buttonText: "See Project",
      ImgLink: "",
      alt: "",
    },
  ];
  return (
    <section id="projects" className="pt-30 pb-20 px-20 relative">
      <p className="role">THINGS I'VE BUILT</p>
      <h1 className="section-title">Projects.</h1>
      <Grid>
        {cards.map(
          ({ title, description, buttonText, ImgLink, alt }, index) => (
            <CardContainer scale shadow key={index}>
              <CardMedia PreviewImg={ImgLink} alt={alt} />
              <ContentContainer>
                <CardContent
                  title={title}
                  titleClass="group-hover:text-accent"
                  description={description}
                />
                <CardActions align="right">
                  <CardButton buttonText={buttonText} variant="secondary" />
                </CardActions>
              </ContentContainer>
            </CardContainer>
          ),
        )}
      </Grid>
    </section>
  );
}

export default Projects;

import { ProjectType } from "./Projects";

export function Project(props: { props: ProjectType}) {

  const {name, company, description, date, links} = props.props

    return (
      <>
        <h1>{name}</h1>
        <h2>{company}</h2>
        <h2>{description}</h2>
        <h2>{date}</h2>
        {
          links.map((link: string) => {
            return (
              <h2>{link}</h2>
            )
          })
        }
      </>
    )
}
function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/treeewzrd"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/treeewzrd"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/treeewzrd"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;

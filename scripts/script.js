const social_medias = {
  github: "Lazlo-coder",
  youtube: "channel/UCnqJa033dFAqd3pvMkZizyg",
  facebook: "lasaro.almeida.9",
  instagram: "lasaro_almeida",
  twitter: "",
};

function change_social_medias_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${social_medias[social]}`;
  }
}

function get_github_profile_infos() {
  const url = `https://api.github.com/users/${social_medias.github}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      user_avatar.src = data["avatar_url"];
      user_name.textContent = data["name"];
      user_login.textContent = data["login"];
      user_bio.textContent = data["bio"];
      user_contact.href = data["html_url"];
    });
}

change_social_medias_links();
get_github_profile_infos();

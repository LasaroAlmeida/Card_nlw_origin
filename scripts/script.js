/**
 * Lásaro de Almeida Deodoro
 * 22/10/2021
 * <NLW/> Heat
 */
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

change_social_medias_links();

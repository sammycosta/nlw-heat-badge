const linksSocialMedia = {
  github: 'sammycosta',
  linkedin: 'in/samantha-costa-81aa90221/',
  facebook: 'samakokoro',
  instagram: 'samoshu',
  twitter: 'hoshitorus'
}

function changeSocialMediaLinks() {
  // socialLinks é a ul ('pai de li')
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    // preciso colocar qual filho!
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}` // o [] pega a variável pra chamar o objeto
  }
}
changeSocialMediaLinks()

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json()) // transforma em json
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfileInfo()

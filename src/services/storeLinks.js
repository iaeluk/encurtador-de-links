
export async function getLinksSaved(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaved = JSON.parse(myLinks) || []

    return linksSaved
}

export async function saveLink(key, newLink) {
    let linksStored = await getLinksSaved(key)

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if (hasLink) {
        console.log('link ja existe')
        return
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo com sucessp')
}

export async function deleteLink(links, id) {

    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('link deletado com sucesso')

    return myLinks
}
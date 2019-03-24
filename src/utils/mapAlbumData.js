export const mapAlbumData = data => {
  if (!data) {
    throw new Error('No data');
  }
  
  if (!data.feed) {
    throw new Error('No feed data');
  }
  
  if (!data.feed.entry) {
    throw new Error('No album entries in feed');
  }

  return data.feed.entry.map(album => {
    return {
      id: album['id'].attributes['im:id'],
      name: album['im:name'].label,
      artist: {
        name: album['im:artist'].label,
        url: album['im:artist'].attributes ? album['im:artist'].attributes.href : null
      },
      iTunesUrl: album.link.attributes.href,
      images: {
        small: album['im:image'][0].label,
        medium: album['im:image'][2].label,
        // we abuse poor Apple and get ourselves some higher resolution images
        big: album['im:image'][0].label.replace(/\d+x\d+bb/gi, '255x255bb'),
        huge: album['im:image'][0].label.replace(/\d+x\d+bb/gi, '512x512bb'),
      },
      price: album['im:price'].label,
      category: album.category.attributes.label,
      releaseDate: album['im:releaseDate'].label
    };
  });
};

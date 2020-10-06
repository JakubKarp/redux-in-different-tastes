import CONSTS from '../../consts/consts';

export async function getSmile() {
  let gif = '';
  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${CONSTS.GIPHY_KEY}&tag=smile`)
    .then(resp => resp.json())
    .then(resp => {gif = resp.data.fixed_height_downsampled_url})

  return gif
};
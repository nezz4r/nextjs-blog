import axios from 'axios';

async function getData() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

export async function getPostsData() {
  const data = await getData();
  return data;
}

export async function getPostData(postId) {
  const data = await getData();
  const { userId, id, title, body } = data[postId - 1];
  return {
    userId,
    id,
    title,
    body,
  };
}

export async function getAllPostIds() {
  const data = await getData();
  return data.map((i) => String(i.id));
}
export async function getFilteredPostsData(id, length = 4) {
  const filteredPostsData = await getData()
    .filter((data) => {
      if (data.id === id) return false;
      else return true;
    })
    .slice(0, length);
  return filteredPostsData;
}

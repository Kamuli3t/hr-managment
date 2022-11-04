import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';

const USERS = [];
function createRandomUser() {
  return {
    id: USERS.length + 1,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
  };
}

function getUsers(view_page, per_page, num_users, total_page) {
  Array.from({ length: num_users }).forEach(() => {
    USERS.push(createRandomUser());
  });
  return {
    page: view_page,
    per_page: per_page,
    total: num_users,
    total_pages: total_page,
    data: USERS,
  };
}

export default getUsers;

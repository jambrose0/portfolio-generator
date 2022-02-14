const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
  for (let i = 0; i < profileDataArgs.length; i++) {
    console.log(profileDataArgs[i]);
  }

  console.log("===========");

  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);

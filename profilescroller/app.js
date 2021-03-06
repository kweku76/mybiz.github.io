const data = [ // This is the main profile data for 3 examples. An array with hard coded data
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
    {
    name: 'Sandra James',
    age: 28,
    gender: 'female',
    lookingfor: 'female',
    location: 'NY NY',
    image: 'https://randomuser.me/api/portraits/women/81.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile); //on click go next profile in array

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: <span style="font-weight:bold">${currentProfile.name}</span></li>
        <li class="list-group-item">Age: <span style="font-weight:bold">${currentProfile.age}</span></li>
        <li class="list-group-item">Location: <span style="font-weight:bold">${currentProfile.location}</span></li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for <span style="font-weight:bold">${currentProfile.lookingfor}</span></li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      }
    }
  };
}

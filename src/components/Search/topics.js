module.exports = {
  type: "Facet Topics",
  topics: [
    {
      name: 'People',
      value: 'people',
      children: [
        {
          name: 'Criminals',
          value: 'criminals',
          children: [
            {name: 'Accused/Alleged', value: 'Accused/Alleged'},
            {name: 'Offender/Convicted', value: 'Offender/Convicted'}
          ]
        },
        {
          name: 'Economic Categories',
          value: 'economic categories',
          children: [
            {name: 'Workers/Employees', value: 'Workers/Employees'},
            {name: 'Employers', value: 'employers'}
          ]
        },
        {
          name: 'Family',
          value: 'family',
          children: [
            {name: 'Parents', value: 'parents'},
            {name: 'Children', value: 'children'},
            {name: 'Mothers', value: 'mothers'},
            {name: 'Fathers', value: 'fathers'}
          ]
        },
        {
          name: 'Special Categories',
          value: 'special categories',
          children: [
            {name: 'Children/Youth', value: 'Children/Youth'},
            {name: 'Elderly', value: 'elderly'},
            {name: 'Indigenous/Native', value: 'Indigenous/Native'},
            {name: 'LGBTI', value: 'LGBTI'},
            {name: 'Persons with Disabilities', value: 'persons with disabilities'},
            {name: 'Religious', value: 'religious'},
            {name: 'Ethnic/Racial', value: 'Ethnic/Racial'},
            {name: 'Sick/Wounded', value: 'Sick/Wounded'},
            {name: 'Unborn/Fetus', value: 'Unborn/Fetus'}
          ]
        },
        {
          name: 'Political Categories',
          value: 'political categories',
          children: [
            {name: 'Detained Persons/Imprisoned Persons', value: 'Detained Persons/Imprisoned Persons'},
            {name: 'Missing Persons/Disappeared Persons', value: 'Missing Persons/Disappeared Persons'},
            {
              name: 'People on the move/Itinerant',
              value: 'People on the move/Itinerant',
              children: [
                {name: 'Asylum Seekers/Asylees', value: 'Asylum Seekers/Asylees'},
                {name: 'Immigrants', value: 'immigrants'},
                {name: 'Migrants', value: 'migrants'},
                {name: 'Refugees', value: 'refugees'},
                {name: 'Stateless Persons', value: 'stateless persons'},
                {name: 'Displaced Persons', value: 'displaced persons'}
              ]
            },
            {name: 'Political leaders/Public officials', value: 'Political leaders/Public officials'},
            {name: 'Courts/Judicial authorities', value: 'Courts/Judicial authorities'},
            {name: 'Police', value: 'police'},
            {name: 'Armed forces/Military', value: 'Armed forces/Militaryy'},
            {name: 'Civilians', value: 'civilians'},
            {name: 'Prisoners of War', value: 'prisoners of war'}
          ]
        },
        {name: 'Victims', value: 'Victims'},
        {name: 'Vulnerable/Poor', value: 'Vulnerable/Poor'},
        {
          name: 'Women',
          value: 'women',
          children: [
            {name: 'Pregnant Women', value: 'pregnant women'}
          ]
        }
      ]
    },
    {
      name: 'International Entities',
      value: 'international entities',
      children: [
        {name: 'International Organizations', value: 'international organizations'},
        {name: 'International Tribunals/Courts', value: 'International Tribunals/Courts'},
        {name: 'Political alliances', value: 'political alliances'},
        {name: 'Economic unions', value: 'economic unions'},
        {name: 'Multinational corporations', value: 'multinational corporations'}
      ]
    },
    {
      name: 'Society',
      value: 'society',
      children: [
        {
          name: 'Civil society',
          value: 'civil society',
          children: [
            {
              name: 'Religious institutions/Faith-based organizations',
              value: 'Religious institutions/Faith-based organizations',
              children: [
                {name: 'The Catholic Church', value: 'The Catholic Church'}
              ]
            },
            {name: 'NGOs', value: 'NGOs'},
            {name: 'Educational Institutions', value: 'educational institutions'},
            {name: 'Community', value: 'community'},
            {name: 'Unions', value: 'unions'}
          ]
        },
        {name: 'Businesses/Corporations', value: 'Businesses/Corporations'},
        {name: 'Government/The State', value: 'Government/The State'}
      ]
    },
    {
      name: 'Non-human animals',
      value: 'non-human animals'
    },
  ]
}

module.exports = {
  type: "Facet Topics",
  topics: [
    {
      name: 'Actors',
      value: 'actors',
      children: [
        {
          name: 'People',
          value: 'people',
          children: [
            {
              name: 'Criminals',
              value: 'criminals',
              children: [
                {name: 'Accused/Alleged', value: 'accused alleged'},
                {name: 'Offender/Convicted', value: 'offender convicted'}
              ]
            },
            {
              name: 'Economic Categories',
              value: 'economic categories',
              children: [
                {name: 'Workers/Employees', value: 'workers employees'},
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
                {name: 'Children/Youth', value: 'children youth'},
                {name: 'Elderly', value: 'elderly'},
                {name: 'Indigenous/Native', value: 'indigenous native'},
                {name: 'LGBTI', value: 'LGBTI'},
                {name: 'Persons with Disabilities', value: 'persons with disabilities'},
                {name: 'Religious', value: 'religious'},
                {name: 'Ethnic/Racial', value: 'ethnic racial'},
                {name: 'Sick/Wounded', value: 'sick wounded'},
                {name: 'Unborn/Fetus', value: 'unborn fetus'}
              ]
            },
            {
              name: 'Political Categories',
              value: 'political categories',
              children: [
                {name: 'Detained Persons/Imprisoned Persons', value: 'detained persons imprisoned persons'},
                {name: 'Missing Persons/Disappeared Persons', value: 'missing persons disappeared persons'},
                {
                  name: 'People on the move/Itinerant',
                  value: 'people on the move itinerant',
                  children: [
                    {name: 'Asylum Seekers/Asylees', value: 'asylum seekers asylees'},
                    {name: 'Immigrants', value: 'immigrants'},
                    {name: 'Migrants', value: 'migrants'},
                    {name: 'Refugees', value: 'refugees'},
                    {name: 'Stateless Persons', value: 'stateless persons'},
                    {name: 'Displaced Persons', value: 'displaced persons'}
                  ]
                },
                {name: 'Political leaders/Public officials', value: 'political leaders public officials'},
                {name: 'Courts/Judicial authorities', value: 'courts judicial authorities'},
                {name: 'Police', value: 'police'},
                {name: 'Armed forces/Military', value: 'armed forces military'},
                {name: 'Civilians', value: 'civilians'},
                {name: 'Prisoners of War', value: 'prisoners of war'}
              ]
            },
            {name: 'Victims', value: 'victims'},
            {name: 'Vulnerable/Poor', value: 'vulnerable poor'},
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
            {name: 'International Tribunals/Courts', value: 'international tribunals courts'},
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
                  value: 'religious institutions faith based organizations',
                  children: [
                    {name: 'The Catholic Church', value: 'the catholic church'}
                  ]
                },
                {name: 'NGOs', value: 'NGOs'},
                {name: 'Educational Institutions', value: 'educational institutions'},
                {name: 'Community', value: 'community'},
                {name: 'Unions', value: 'unions'}
              ]
            },
            {name: 'Businesses/Corporations', value: 'businesses corporations'},
            {name: 'Government/The State', value: 'government the state'}
          ]
        },
        {
          name: 'Non-human animals',
          value: 'non-human animals'
        },
      ]
    },
    {
      name: 'Harms and Violations',
      value: 'harms violations',
      children: [
        { name: 'Violence', value: 'violence' },
        { name: 'Basic Necessities', value: 'basic necessities' },
        { name: 'Political Rule/Governance', value: 'political rule governance' },
        { name: 'Termination of Life/End of Life', value: 'termination of life end of life' }
      ]
    },
    {
      name: 'Right and Freedoms',
      value: 'right freedoms',
      children: [
        { name: 'Family', value: 'family' },
        { name: 'Life/Bodily Integrity', value: 'life bodily integrity' },
        { name: 'Opinion and Expression', value: 'opinion expression' },
        { name: 'Work/Labor', value: 'work labor' }
      ]
    },
    {
      name: 'Principles and Values',
      value: 'principles values',
      children: [
        { name: 'Common Good/General Welfare', value: 'common good general welfare' },
        { name: 'Development/Human Flourishing/Integral Human Development ', value: 'development human flourishing integral human development' },
        { name: 'Equality', value: 'equality' },
        { name: 'Freedom(s)', value: 'freedoms' }
      ]
    }
  ]
}

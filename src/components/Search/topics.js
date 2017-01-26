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
                {
                  name: 'Spouses',
                  value: 'spouses',
                  children: [
                    {name: 'Widows/Widowers', value: 'widows widowers'},
                  ]
                },
                {name: 'Parents', value: 'parents'},
                {name: 'Children', value: 'children'},
                {
                  name: 'Mothers',
                  value: 'mothers',
                  children: [
                    {name: 'Pregnant or Nursing', value: 'pregnant or nursing'},
                  ]
                },
                {name: 'Fathers', value: 'fathers'}
              ]
            },
            {
              name: 'Special Categories',
              value: 'special categories',
              children: [
                {name: 'Youth', value: 'youth'},
                {name: 'Elderly', value: 'elderly'},
                {name: 'Indigenous/Native', value: 'indigenous native'},
                {name: 'LGBTI', value: 'LGBTI'},
                {name: 'Persons with Disabilities', value: 'persons with disabilities'},
                {name: 'Religious', value: 'religious'},
                {name: 'Rural', value: 'rural'},
                {name: 'Ethnic/Racial', value: 'ethnic racial'},
                {name: 'Sick/Wounded', value: 'sick wounded'},
                {name: 'Urban', value: 'urban'},
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
                {name: 'Police/Law Enforcement', value: 'police law enforcement'},
                {name: 'Armed forces/Military', value: 'armed forces military'},
                {name: 'Civilians', value: 'civilians'},
                {name: 'Prisoners of War', value: 'prisoners of war'}
              ]
            },
            {name: 'Victims', value: 'victims'},
            {name: 'Vulnerable/Poor', value: 'vulnerable poor'},
            {name: 'Women', value: 'women'}
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
                {name: 'Media', value: 'media'},
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
        {
          name: 'Organized Crime',
          value: 'Organized Crime',
          children: [
            { name: 'Illicit Traffic of Arms', value: 'Illicit Traffic of Arms' },
            { name: 'Illegal Drug Trade', value: 'Illegal Drug Trade' },
          ]
        },
        {
          name: 'Discrimination/Prejudice/ Inequality/Marginalization',
          value: 'Discrimination Prejudice Inequality Marginalization',
          children: [
            { name: 'Ethnic conflict/Ethnic Persecution', value: 'Ethnic conflict Ethnic Persecution' },
            { name: 'Gender', value: 'Gender' },
            { name: 'Racism', value: 'Racism' },
            { name: 'Religious Coercion', value: 'Religious Coercion' },
            { name: 'Cultural Persecution/Cultural Oppression', value: 'Cultural Persecution Cultural Oppression' },
            { name: 'Interreligious Tension/Conflict', value: 'Interreligious Tension Conflict' },
            { name: 'Religious Persecution', value: 'Religious Persecution' },
          ]
        },
        {
          name: 'Violence',
          value: 'Violence',
          children: [
            { name: 'Murder', value: 'Murder' },
            { name: 'Abuse/Neglect/Maltreatment', value: 'Abuse Neglect Maltreatment' },
            { name: 'Sexual Violence/Rape/Prostitution/Sex Trafficking', value: 'Sexual Violence Rape Prostitution Sex Trafficking' },
            { name: 'Torture/Cruel, Inhuman and Degrading Treatment', value: 'Torture Cruel Inhuman and Degrading Treatment' },
            {
              name: 'Armed Conflict/War',
              value: 'Armed Conflict War',
              children: [
                {
                  name: 'Weapons',
                  value: 'Weapons',
                  children: [
                    { name: 'Conventional Weapons', value: 'Conventional Weapons' },
                    { name: 'Nuclear Weapons', value: 'Nuclear Weapons' },
                    { name: 'Chemical/Biological Weapons', value: 'Chemical Biological Weapons' },
                  ]
                },
                { name: 'Child Soldiers', value: 'Child Soldiers' },
              ]
            },
            { name: 'Terrorism', value: 'Terrorism' },
            { name: 'Coercion', value: 'Coercion' },
            { name: 'Domestic Violence', value: 'Domestic Violence' },
          ]
        },
        {
          name: 'Ecological Damage',
          value: 'Ecological Damage',
          children: [
            { name: 'Pollution and Climate Change', value: 'Pollution and Climate Change' },
            { name: 'Depletion of Natural Resources', value: 'Depletion of Natural Resources' },
            { name: 'Loss of Biodiversity', value: 'Loss of Biodiversity' },
            { name: 'Unsustainable consumption/production', value: 'Unsustainable consumption production' },
          ]
        },
        {
          name: 'Economic/Labor',
          value: 'Economic Labor',
          children: [
            { name: 'Debt of Nations', value: 'Debt of Nations' },
            { name: 'Unemployment', value: 'Unemployment' },
            { name: 'Child Labor', value: 'Child Labor' },
            { name: 'Poverty/economic deprivation', value: 'Poverty economic deprivation' },
            { name: 'Economic Domination/Usury/Financial Exploitation', value: 'Economic Domination Usury Financial Exploitation' },
            { name: 'Underdevelopment', value: 'Underdevelopment' },
            { name: 'Forced labor/Slavery/Human Trafficking', value: 'Forced labor Slavery Human Trafficking' },
            { name: 'Greed/Corruption', value: 'Greed Corruption' },
          ]
        },
        {
          name: 'Termination of Life/End of Life',
          value: 'Termination of Life End of Life',
          children: [
            { name: 'Death Penalty/Executions', value: 'Death Penalty Executions' },
            { name: 'Murder', value: 'Murder' },
            { name: 'Abortion', value: 'Abortion' },
            { name: 'Euthanasia/Assisted Suicide', value: 'Euthanasia Assisted Suicide' },
          ]
        },
        {
          name: 'Basic Necessities',
          value: 'Basic Necessities',
          children: [
            { name: 'Disease/Lack of Adequate Healthcare', value: 'Disease Lack of Adequate Healthcare' },
            { name: 'Lack of Food/Malnutrition/Starvation', value: 'Lack of Food Malnutrition Starvation' },
            { name: 'Lack of Education', value: 'Lack of Education' },
            { name: 'Lack of Water', value: 'Lack of Water' },
            { name: 'Homelessness', value: 'Homelessness' },
          ]
        },
        {
          name: 'Political Rule/Governance',
          value: 'Political Rule Governance',
          children: [
            { name: 'Deportation', value: 'Deportation' },
            { name: 'Imperialism/Colonialism/Foreign Domination', value: 'Imperialism Colonialism Foreign Domination' },
            { name: 'Totalitarianism/Dictatorial Regimes/Tyranny/Oppression', value: 'Totalitarianism Dictatorial Regimes Tyranny Oppression' },
            { name: 'Unjust Structures/Structural Sin', value: 'Unjust Structures Structural Sin' },
            { name: 'Arbitrary arrest/Illegal detention/Abduction/Forced Disappearance', value: 'Arbitrary arrest Illegal detention Abduction Forced Disappearance' },
            { name: 'Forced Migration', value: 'Forced Migration' },
          ]
        },
        {
          name: 'Violations of International Humanitarian Law',
          value: 'Violations of International Humanitarian Law',
          children: [
            { name: 'War Crimes', value: 'War Crimes' },
            {
              name: 'Crimes Against Humanity',
              value: 'Crimes Against Humanity',
              children: [
                { name: 'Persecution against an identifiable group', value: 'Persecution against an identifiable group' },
                { name: 'Murder (IHL)', value: 'Murder (IHL)' },
                { name: 'Apartheid', value: 'Apartheid' },
                { name: 'Imprisonment', value: 'Imprisonment' },
                { name: 'Deportation (IHL)', value: 'Deportation (IHL)' },
                { name: 'Slavery', value: 'Slavery' },
                { name: 'Extermination', value: 'Extermination' },
                { name: 'Sexual Violence/Rape/Sex Trafficking', value: 'Sexual Violence Rape Sex Trafficking' },
                { name: 'Forced disappearance', value: 'Forced disappearance' },
                { name: 'Torture, inhuman and degrading treatment', value: 'Torture inhuman and degrading treatment' },
              ]
            },
            { name: 'Genocide', value: 'Genocide' },
          ]
        },
      ]
    },
    {
      name: 'Rights and Freedoms',
      value: 'right freedoms',
      children: [
        {
          name: 'Economic/Social/Cultural',
          value: 'Economic Social Cultural',
          children: [
            { name: 'Property Rights', value: 'Property Rights' },
            { name: 'Social Security/Social Welfare', value: 'Social Security Social Welfare' },
            {
              name: 'Family Rights',
              value: 'Family Rights',
              children: [
                { name: 'Reproductive Rights', value: 'Reproductive Rights' },
                { name: 'Marriage/Divorce', value: 'Marriage Divorce' },
                { name: 'Maternity', value: 'Maternity' },
                { name: 'Fundamental Unit of Society', value: 'Fundamental Unit of Society' },
                { name: 'Care of Children', value: 'Care of Children' },
              ]
            },
            { name: 'Cultural Life', value: 'Cultural Life' },
            {
              name: 'Work/Labor',
              value: 'Work Labor',
              children: [
                {
                  name: 'Right to Work',
                  value: 'Right to Work',
                  children: [
                    { name: 'Freedom of Occupation', value: 'Freedom of Occupation' },
                    { name: 'Vocational Guidance/Training', value: 'Vocational Guidance Training' },
                  ]
                },
                {
                  name: 'Just Conditions',
                  value: 'Just Conditions',
                  children: [
                    { name: 'Rest/Leisure', value: 'Rest Leisure' },
                    { name: 'Safe/Healthy Work Environment', value: 'Safe Healthy Work Environment' },
                    { name: 'Remuneration', value: 'Remuneration' },
                  ]
                },
                {
                  name: 'Special Protections',
                  value: 'Special Protections',
                  children: [
                    { name: 'Protection of Family', value: 'Protection of Family' },
                    { name: 'Protection of Migrants', value: 'Protection of Migrants' },
                    { name: 'Protection of Youth', value: 'Protection of Youth' },
                    { name: 'Protection of Maternity', value: 'Protection of Maternity' },
                    { name: 'Protection of Persons with Disabilities', value: 'Protection of Persons with Disabilities' },
                  ]
                },
                {
                  name: 'Trade Unions',
                  value: 'Trade Unions',
                  children: [
                    { name: 'Form/Join', value: 'Form Join' },
                    { name: 'Strike/Collective Bargaining', value: 'Strike Collective Bargaining' },
                  ]
                },
              ]
            },
            {
              name: 'Health',
              value: 'Health',
              children: [
                { name: 'Physical/Mental Wellbeing', value: 'Physical Mental Wellbeing' },
                { name: 'Public Health', value: 'Public Health' },
                { name: 'Access to Healthcare', value: 'Access to Healthcare' },
              ]
            },
            {
              name: 'Adequate Standard of Living',
              value: 'Adequate Standard of Living',
              children: [
                { name: 'Food', value: 'Food' },
                { name: 'Water', value: 'Water' },
                { name: 'Housing', value: 'Housing' },
                { name: 'Clothing', value: 'Clothing' },
              ]
            },
            {
              name: 'Education',
              value: 'Education',
              children: [
                { name: 'Access to Education', value: 'Access to Education' },
                { name: 'Aims of Education', value: 'Aims of Education' },
                { name: 'Religious/Moral Education', value: 'Religious Moral Education' },
                { name: 'Liberty of Parents', value: 'Liberty of Parents' },
              ]
            },
            { name: 'Science/Technology', value: 'Science Technology' },
          ]
        },
        {
          name: 'Civil/Political',
          value: 'Civil Political',
          children: [
            { name: 'MISSING ITEMS!', value: 'MISSING ITEMS!' },
          ]
        },
        { name: 'Self-Determination', value: 'Self-Determination' },
      ]
    },
    {
      name: 'Principles and Values',
      value: 'principles values',
      children: [
        { name: 'Subsidiarity', value: 'Subsidiarity' },
        {
          name: 'Corporate Social Responsibility',
          value: 'Corporate Social Responsibility',
          children: [
            { name: 'Integrity', value: 'Integrity' },
            { name: 'Trust and Transparency', value: 'Trust and Transparency' },
            { name: 'Safety', value: 'Safety' },
            { name: 'Accountability', value: 'Accountability' },
          ]
        },
        {
          name: 'Diversity',
          value: 'Diversity',
          children: [
            { name: 'Dialogue', value: 'Dialogue' },
            { name: 'Respect/Tolerance', value: 'Respect Tolerance' },
            { name: 'Inter-faith', value: 'Inter-faith' },
          ]
        },
        {
          name: 'Solidarity/Cooperation',
          value: 'Solidarity Cooperation',
          children: [
            { name: 'Compassion/Empathy', value: 'Compassion Empathy' },
            { name: 'Service', value: 'Service' },
            { name: 'Charity', value: 'Charity' },
          ]
        },
        { name: 'Preferential Option for the poor and vulnerable', value: 'Preferential Option for the poor and vulnerable' },
        {
          name: 'Justice',
          value: 'Justice',
          children: [
            { name: 'Social (or legal ) justice', value: 'Social (or legal ) justice' },
            { name: 'Distributive justice', value: 'Distributive justice' },
            { name: 'Rule of Law', value: 'Rule of Law' },
            { name: 'Transitional justice', value: 'Transitional justice' },
            { name: 'Restorative justice', value: 'Restorative justice' },
            { name: 'Economic (or Commutative) justice', value: 'Economic (or Commutative) justice' },
          ]
        },
        {
          name: 'Freedom(s)',
          value: 'Freedom(s)',
          children: [
            { name: 'Limitation of Freedom(s)', value: 'Limitation of Freedom(s)' },
            { name: 'Sources of Freedom(s)', value: 'Sources of Freedom(s)' },
            { name: 'Duty to Others', value: 'Duty to Others' },
            { name: 'Exercise of Freedom(s)', value: 'Exercise of Freedom(s)' },
          ]
        },
        {
          name: 'Peace',
          value: 'Peace',
          children: [
            { name: 'Conflict Prevention', value: 'Conflict Prevention' },
            { name: 'Pacifism and Non-Violence', value: 'Pacifism and Non-Violence' },
            {
              name: 'Just War Theory',
              value: 'Just War Theory',
              children: [
                { name: 'Jus in Bello (Law of War)', value: 'Jus in Bello (Law of War)' },
                { name: 'Jus Ad Bellum (Right to engage in War)', value: 'Jus Ad Bellum (Right to engage in War)' },
              ]
            },
            { name: 'Conflict Processes/Conflict Resolution', value: 'Conflict Processes Conflict Resolution' },
            {
              name: 'Post-Conflict Reconciliation/Transitional Justice',
              value: 'Post-Conflict Reconciliation Transitional Justice',
              children: [
                { name: 'Transitional Justice Processes/Mechanisms', value: 'Transitional Justice Processes Mechanisms' },
                { name: 'Peacekeeping & Disarmament', value: 'Peacekeeping & Disarmament' },
                { name: 'Reconstruction & Rehabilitation', value: 'Reconstruction & Rehabilitation' },
              ]
            },
          ]
        },
        { name: 'Ecological Responsibility/Environmental Sustainability', value: 'Ecological Responsibility Environmental Sustainability' },
        { name: 'Family Life', value: 'Family Life' },
        { name: 'Democracy', value: 'Democracy' },
        { name: 'Culture', value: 'Culture' },
        { name: 'Common Good/General Welfare', value: 'Common Good General Welfare' },
        {
          name: 'Development/Human Flourishing/Integral Human Development',
          value: 'Development Human Flourishing Integral Human Development',
          children: [
            { name: 'Environmental', value: 'Environmental' },
            { name: 'Spiritual', value: 'Spiritual' },
            { name: 'Economic', value: 'Economic' },
            { name: 'Social', value: 'Social' },
          ]
        },
        {
          name: 'Equality',
          value: 'Equality',
          children: [
            { name: 'Equality of Opportunity', value: 'Equality of Opportunity' },
            { name: 'As Juridical Persons', value: 'As Juridical Persons' },
            { name: 'Economic', value: 'Economic' },
            { name: 'As Human Persons', value: 'As Human Persons' },
            { name: 'Social/Political', value: 'Social Political' },
            { name: 'Equality of Outcome', value: 'Equality of Outcome' },
          ]
        },
        { name: 'Security', value: 'Security' },
        {
          name: 'Human Dignity',
          value: 'Human Dignity',
          children: [
            { name: 'State and Individual Relational Claims', value: 'State and Individual Relational Claims' },
            { name: 'Ontological Claims', value: 'Ontological Claims' },
            { name: 'Relational Claims', value: 'Relational Claims' },
          ]
        },
        { name: 'Agency/Self-Determination', value: 'Agency Self-Determination' },
      ]
    }
  ]
}

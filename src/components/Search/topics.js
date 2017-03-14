module.exports = {
  type: "Facet Topics",
  topics: [
    {
      name: 'Actors',
      value: 'actors',
      children: [
        {
          name: 'People',
          value: 'People',
          children: [
            {
              name: 'Criminals',
              value: 'Criminals',
              children: [
                { name: 'Accused/Alleged', value: 'Accused Alleged' },
                { name: 'Offender/Convicted', value: 'Offender Convicted' },
              ]
            },
            {
              name: 'Economic Categories',
              value: 'Economic Categories',
              children: [
                { name: 'Workers/Employees', value: 'Workers Employees' },
                { name: 'Employers', value: 'Employers' },
              ]
            },
            {
              name: 'Family',
              value: 'Family',
              children: [
                {
                  name: 'Spouses',
                  value: 'Spouses',
                  children: [
                    { name: 'Widows/Widowers', value: 'Widows Widowers' },
                  ]
                },
                { name: 'Parents', value: 'Parents' },
                { name: 'Children', value: 'Children' },
                {
                  name: 'Mothers',
                  value: 'Mothers',
                  children: [
                    { name: 'Pregnant or Nursing', value: 'Pregnant or Nursing' },
                  ]
                },
                { name: 'Fathers', value: 'Fathers' },
              ]
            },
            {
              name: 'Special Categories',
              value: 'Special Categories',
              children: [
                { name: 'Youth', value: 'Youth' },
                { name: 'Elderly', value: 'Elderly' },
                { name: 'Indigenous/Native', value: 'Indigenous Native' },
                { name: 'LGBTI', value: 'LGBTI' },
                { name: 'Persons with Disabilities', value: 'Persons with Disabilities' },
                { name: 'Religious', value: 'Religious' },
                { name: 'Rural', value: 'Rural' },
                { name: 'Ethnic/Racial/Cultural', value: 'Ethnic Racial Cultural' },
                { name: 'Sick/Wounded', value: 'Sick Wounded' },
                { name: 'Urban', value: 'Urban' },
                { name: 'Unborn/Fetus', value: 'Unborn Fetus' },
              ]
            },
            {
              name: 'Political Categories',
              value: 'Political Categories',
              children: [
                { name: 'Detained Persons/Imprisoned Persons', value: 'Detained Persons Imprisoned Persons' },
                { name: 'Missing Persons/Disappeared Persons', value: 'Missing Persons Disappeared Persons' },
                {
                  name: 'People on the move/Itinerant',
                  value: 'People on the move Itinerant',
                  children: [
                    { name: 'Asylum Seekers/Asylees', value: 'Asylum Seekers Asylees' },
                    { name: 'Immigrants', value: 'Immigrants' },
                    { name: 'Migrants', value: 'Migrants' },
                    { name: 'Refugees', value: 'Refugees' },
                    { name: 'Stateless Persons', value: 'Stateless Persons' },
                    { name: 'Displaced Persons', value: 'Displaced Persons' },
                  ]
                },
                { name: 'Political leaders/Public officials', value: 'Political leaders Public officials' },
                { name: 'Courts/Judicial authorities', value: 'Courts Judicial authorities' },
                { name: 'Police/Law Enforcement', value: 'Police Law Enforcement' },
                { name: 'Armed forces/Military', value: 'Armed forces Military' },
                { name: 'Civilians', value: 'Civilians' },
                { name: 'Prisoners of War', value: 'Prisoners of War' },
              ]
            },
            { name: 'Vulnerable/Poor', value: 'Vulnerable Poor' },
            { name: 'Victims', value: 'Victims' },
            { name: 'Women', value: 'Women' },
          ]
        },
        {
          name: 'International Entities',
          value: 'International Entities',
          children: [
            { name: 'International Organizations', value: 'International Organizations' },
            { name: 'International Tribunals/Courts', value: 'International Tribunals Courts' },
            { name: 'Political alliances', value: 'Political alliances' },
            { name: 'Economic unions', value: 'Economic unions' },
            { name: 'Multinational corporations', value: 'Multinational corporations' },
          ]
        },
        {
          name: 'Society',
          value: 'Society',
          children: [
            {
              name: 'Civil society',
              value: 'Civil society',
              children: [
                {
                  name: 'Religious institutions/Faith-based organizations',
                  value: 'Religious institutions Faith-based organizations',
                  children: [
                    { name: 'The Catholic Church', value: 'The Catholic Church' },
                  ]
                },
                { name: 'NGOs', value: 'NGOs' },
                { name: 'Media', value: 'Media' },
                { name: 'Educational Institutions', value: 'Educational Institutions' },
                { name: 'Community', value: 'Community' },
                { name: 'Unions', value: 'Unions' },
              ]
            },
            { name: 'Businesses/Corporations', value: 'Businesses Corporations' },
            { name: 'Government/The State', value: 'Government The State' },
          ]
        },
        { name: 'Non-human animals', value: 'Non-human animals' },
      ]
    },
    {
      name: 'Harms and Violations',
      value: 'harms violations',
      children: [
        {
          name: 'Basic Necessities',
          value: 'Basic Necessities',
          children: [
            { name: 'Disease/Lack of Adequate Healthcare', value: 'Disease Lack of Adequate Healthcare' },
            { name: 'Homelessness', value: 'Homelessness' },
            { name: 'Lack of Education', value: 'Lack of Education' },
            { name: 'Lack of Food/Malnutrition/Starvation', value: 'Lack of Food Malnutrition Starvation' },
            { name: 'Lack of Water', value: 'Lack of Water' },
          ]
        },
        {
          name: 'Discrimination/Prejudice/ Inequality/Marginalization',
          value: 'Discrimination Prejudice Inequality Marginalization',
          children: [
            { name: 'Cultural Persecution/Cultural Oppression', value: 'Cultural Persecution Cultural Oppression' },
            { name: 'Ethnic conflict/Ethnic Persecution', value: 'Ethnic conflict Ethnic Persecution' },
            { name: 'Gender', value: 'Gender' },
            { name: 'Interreligious Tension/Conflict', value: 'Interreligious Tension Conflict' },
            { name: 'Racism', value: 'Racism' },
            { name: 'Religious Coercion', value: 'Religious Coercion' },
            { name: 'Religious Persecution', value: 'Religious Persecution' },
          ]
        },
        {
          name: 'Ecological Damage',
          value: 'Ecological Damage',
          children: [
            { name: 'Depletion of Natural Resources', value: 'Depletion of Natural Resources' },
            { name: 'Loss of Biodiversity', value: 'Loss of Biodiversity' },
            { name: 'Pollution and Climate Change', value: 'Pollution and Climate Change' },
            { name: 'Unsustainable consumption/production', value: 'Unsustainable consumption production' },
          ]
        },
        {
          name: 'Economic/Labor',
          value: 'Economic Labor',
          children: [
            { name: 'Child Labor', value: 'Child Labor' },
            { name: 'Debt of Nations', value: 'Debt of Nations' },
            { name: 'Economic Domination/Usury/Financial Exploitation', value: 'Economic Domination Usury Financial Exploitation' },
            { name: 'Forced labor/Slavery/Human Trafficking', value: 'Forced labor Slavery Human Trafficking' },
            { name: 'Greed/Corruption', value: 'Greed Corruption' },
            { name: 'Poverty/economic deprivation', value: 'Poverty economic deprivation' },
            { name: 'Underdevelopment', value: 'Underdevelopment' },
            { name: 'Unemployment', value: 'Unemployment' },
          ]
        },
        {
          name: 'Organized Crime',
          value: 'Organized Crime',
          children: [
            { name: 'Illegal Drug Trade', value: 'Illegal Drug Trade' },
            { name: 'Illicit Traffic of Arms', value: 'Illicit Traffic of Arms' },
          ]
        },
        {
          name: 'Political Rule/Governance',
          value: 'Political Rule Governance',
          children: [
            { name: 'Arbitrary arrest/Illegal detention/Abduction/Forced Disappearance', value: 'Arbitrary arrest Illegal detention Abduction Forced Disappearance' },
            { name: 'Deportation', value: 'Deportation' },
            { name: 'Forced Migration', value: 'Forced Migration' },
            { name: 'Imperialism/Colonialism/Foreign Domination', value: 'Imperialism Colonialism Foreign Domination' },
            { name: 'Totalitarianism/Dictatorial Regimes/Tyranny/Oppression', value: 'Totalitarianism Dictatorial Regimes Tyranny Oppression' },
            { name: 'Unjust Structures/Structural Sin', value: 'Unjust Structures Structural Sin' },
          ]
        },
        {
          name: 'Termination of Life/End of Life',
          value: 'Termination of Life End of Life',
          children: [
            { name: 'Abortion', value: 'Abortion' },
            { name: 'Death Penalty/Executions', value: 'Death Penalty Executions' },
            { name: 'Euthanasia/Assisted Suicide', value: 'Euthanasia Assisted Suicide' },
            { name: 'Murder', value: 'Murder' },
          ]
        },
        {
          name: 'Violence',
          value: 'Violence',
          children: [
            { name: 'Abuse/Neglect/Maltreatment', value: 'Abuse Neglect Maltreatment' },
            {
              name: 'Armed Conflict/War',
              value: 'Armed Conflict War',
              children: [
                { name: 'Child Soldiers', value: 'Child Soldiers' },
                {
                  name: 'Weapons',
                  value: 'Weapons',
                  children: [
                    { name: 'Chemical/Biological Weapons', value: 'Chemical Biological Weapons' },
                    { name: 'Conventional Weapons', value: 'Conventional Weapons' },
                    { name: 'Nuclear Weapons', value: 'Nuclear Weapons' },
                  ]
                },
              ]
            },
            { name: 'Coercion', value: 'Coercion' },
            { name: 'Domestic Violence', value: 'Domestic Violence' },
            { name: 'Murder', value: 'Murder' },
            { name: 'Sexual Violence/Rape/Prostitution/Sex Trafficking', value: 'Sexual Violence Rape Prostitution Sex Trafficking' },
            { name: 'Terrorism', value: 'Terrorism' },
            { name: 'Torture/Cruel, Inhuman and Degrading Treatment', value: 'Torture Cruel Inhuman and Degrading Treatment' },
          ]
        },
        {
          name: 'Violations of International Humanitarian Law',
          value: 'Violations of International Humanitarian Law',
          children: [
            {
              name: 'Crimes Against Humanity',
              value: 'Crimes Against Humanity',
              children: [
                { name: 'Apartheid', value: 'Apartheid' },
                { name: 'Deportation (IHL)', value: 'Deportation (IHL)' },
                { name: 'Extermination', value: 'Extermination' },
                { name: 'Forced disappearance', value: 'Forced disappearance' },
                { name: 'Imprisonment', value: 'Imprisonment' },
                { name: 'Murder (IHL)', value: 'Murder (IHL)' },
                { name: 'Persecution against an identifiable group', value: 'Persecution against an identifiable group' },
                { name: 'Sexual Violence/Rape/Sex Trafficking', value: 'Sexual Violence Rape Sex Trafficking' },
                { name: 'Slavery', value: 'Slavery' },
                { name: 'Torture, inhuman and degrading treatment', value: 'Torture inhuman and degrading treatment' },
              ]
            },
            { name: 'Genocide', value: 'Genocide' },
            { name: 'War Crimes', value: 'War Crimes' },
          ]
        },
      ]
    },
    {
      name: 'Rights and Freedoms',
      value: 'right freedoms',
      children: [
        {
          name: 'Civil/Political',
          value: 'Civil Political',
          children: [
            { name: 'Association and Assembly', value: 'Association and Assembly' },
            {
              name: 'Family Rights',
              value: 'Family Rights',
              children: [
                { name: 'Care of Children', value: 'Care of Children' },
                { name: 'Fundamental Unit of Society', value: 'Fundamental Unit of Society' },
                { name: 'Marriage/Divorce', value: 'Marriage Divorce' },
                { name: 'Maternity', value: 'Maternity' },
                { name: 'Reproductive Rights', value: 'Reproductive Rights' },
              ]
            },
            { name: 'Freedom from Slavery', value: 'Freedom from Slavery' },
            { name: 'Humane Treatment', value: 'Humane Treatment' },
            { name: 'Judicial Rights', value: 'Judicial Rights' },
            { name: 'Juridical Personality and Equality', value: 'Juridical Personality and Equality' },
            { name: 'Liberty and Security', value: 'Liberty and Security' },
            { name: 'Life', value: 'Life' },
            { name: 'Movement and Residence', value: 'Movement and Residence' },
            { name: 'Name and Nationality', value: 'Name and Nationality' },
            { name: 'Opinion/Expression/Information', value: 'Opinion Expression Information' },
            { name: 'Political Participation', value: 'Political Participation' },
            { name: 'Privacy', value: 'Privacy' },
            { name: 'Property Rights', value: 'Property Rights' },
            {
              name: 'Thought/Conscience/Religion',
              value: 'Thought Conscience Religion',
              children: [
                { name: 'Separation of Church and State', value: 'Separation of Church and State' },
                { name: 'Religious Formation/Education', value: 'Religious Formation Education' },
                { name: 'Free Exercise of Religion', value: 'Free Exercise of Religion' },
                { name: 'Choose/Change Religion', value: 'Choose Change Religion' },
              ]
            },
          ]
        },
        {
          name: 'Economic/Social/Cultural',
          value: 'Economic Social Cultural',
          children: [
            {
              name: 'Adequate Standard of Living',
              value: 'Adequate Standard of Living',
              children: [
                { name: 'Food', value: 'Food' },
                { name: 'Clothing', value: 'Clothing' },
                { name: 'Housing', value: 'Housing' },
                { name: 'Water', value: 'Water' },
              ]
            },
            { name: 'Cultural Life', value: 'Cultural Life' },
            {
              name: 'Education',
              value: 'Education',
              children: [
                { name: 'Access to Education', value: 'Access to Education' },
                { name: 'Aims of Education', value: 'Aims of Education' },
                { name: 'Liberty of Parents', value: 'Liberty of Parents' },
                { name: 'Religious/Moral Education', value: 'Religious Moral Education' },
              ]
            },
            {
              name: 'Family Rights',
              value: 'Family Rights',
              children: [
                { name: 'Care of Children', value: 'Care of Children' },
                { name: 'Fundamental Unit of Society', value: 'Fundamental Unit of Society' },
                { name: 'Marriage/Divorce', value: 'Marriage Divorce' },
                { name: 'Maternity', value: 'Maternity' },
                { name: 'Reproductive Rights', value: 'Reproductive Rights' },
              ]
            },
            {
              name: 'Health',
              value: 'Health',
              children: [
                { name: 'Public Health', value: 'Public Health' },
                { name: 'Access to Healthcare', value: 'Access to Healthcare' },
                { name: 'Physical/Mental Wellbeing', value: 'Physical Mental Wellbeing' },
              ]
            },
            { name: 'Property Rights', value: 'Property Rights' },
            { name: 'Science/Technology', value: 'Science Technology' },
            { name: 'Social Security/Social Welfare', value: 'Social Security Social Welfare' },
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
                    { name: 'Remuneration', value: 'Remuneration' },
                    { name: 'Rest/Leisure', value: 'Rest Leisure' },
                    { name: 'Safe/Healthy Work Environment', value: 'Safe Healthy Work Environment' },
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
                {
                  name: 'Special Protections',
                  value: 'Special Protections',
                  children: [
                    { name: 'Protection of Family', value: 'Protection of Family' },
                    { name: 'Protection of Maternity', value: 'Protection of Maternity' },
                    { name: 'Protection of Migrants', value: 'Protection of Migrants' },
                    { name: 'Protection of Persons with Disabilities', value: 'Protection of Persons with Disabilities' },
                    { name: 'Protection of Youth', value: 'Protection of Youth' },
                  ]
                },
              ]
            },
          ]
        },
        { name: 'Self-Determination', value: 'Self-Determination' },
      ]
    },
    {
      name: 'Principles and Values',
      value: 'principles values',
      children: [
        { name: 'Agency/Self-Determination', value: 'Agency Self-Determination' },
        { name: 'Common Good/General Welfare', value: 'Common Good General Welfare' },
        {
          name: 'Corporate Social Responsibility',
          value: 'Corporate Social Responsibility',
          children: [
            { name: 'Accountability', value: 'Accountability' },
            { name: 'Integrity', value: 'Integrity' },
            { name: 'Safety', value: 'Safety' },
            { name: 'Trust and Transparency', value: 'Trust and Transparency' },
          ]
        },
        { name: 'Culture', value: 'Culture' },
        { name: 'Democracy', value: 'Democracy' },
        {
          name: 'Development/Human Flourishing/Integral Human Development',
          value: 'Development Human Flourishing Integral Human Development',
          children: [
            { name: 'Economic', value: 'Economic' },
            { name: 'Environmental', value: 'Environmental' },
            { name: 'Social', value: 'Social' },
            { name: 'Spiritual', value: 'Spiritual' },
          ]
        },
        {
          name: 'Diversity',
          value: 'Diversity',
          children: [
            { name: 'Dialogue', value: 'Dialogue' },
            { name: 'Inter-faith', value: 'Inter-faith' },
            { name: 'Respect/Tolerance', value: 'Respect Tolerance' },
          ]
        },
        { name: 'Ecological Responsibility/Environmental Sustainability', value: 'Ecological Responsibility Environmental Sustainability' },
        {
          name: 'Equality',
          value: 'Equality',
          children: [
            { name: 'As Human Persons', value: 'As Human Persons' },
            { name: 'As Juridical Persons', value: 'As Juridical Persons' },
            { name: 'Economic Equality', value: 'Economic Equality' },
            { name: 'Equality of Opportunity', value: 'Equality of Opportunity' },
            { name: 'Equality of Outcome', value: 'Equality of Outcome' },
            { name: 'Social/Political', value: 'Social Political' },
          ]
        },
        { name: 'Family Life', value: 'Family Life' },
        {
          name: 'Freedom(s)',
          value: 'Freedom(s)',
          children: [
            { name: 'Duty to Others', value: 'Duty to Others' },
            { name: 'Exercise of Freedom(s)', value: 'Exercise of Freedom(s)' },
            { name: 'Limitation of Freedom(s)', value: 'Limitation of Freedom(s)' },
            { name: 'Sources of Freedom(s)', value: 'Sources of Freedom(s)' },
          ]
        },
        {
          name: 'Human Dignity',
          value: 'Human Dignity',
          children: [
            { name: 'Ontological Claims', value: 'Ontological Claims' },
            { name: 'Relational Claims', value: 'Relational Claims' },
            { name: 'State and Individual Relational Claims', value: 'State and Individual Relational Claims' },
          ]
        },
        {
          name: 'Justice',
          value: 'Justice',
          children: [
            { name: 'Distributive justice', value: 'Distributive justice' },
            { name: 'Economic (or Commutative) justice', value: 'Economic (or Commutative) justice' },
            { name: 'Restorative justice', value: 'Restorative justice' },
            { name: 'Rule of Law', value: 'Rule of Law' },
            { name: 'Social (or legal ) justice', value: 'Social (or legal ) justice' },
            { name: 'Transitional justice', value: 'Transitional justice' },
          ]
        },
        {
          name: 'Peace',
          value: 'Peace',
          children: [
            { name: 'Conflict Prevention', value: 'Conflict Prevention' },
            { name: 'Conflict Processes/Conflict Resolution', value: 'Conflict Processes Conflict Resolution' },
            {
              name: 'Post-Conflict Reconciliation/Transitional Justice',
              value: 'Post-Conflict Reconciliation Transitional Justice',
              children: [
                { name: 'Peacekeeping & Disarmament', value: 'Peacekeeping & Disarmament' },
                { name: 'Reconstruction & Rehabilitation', value: 'Reconstruction & Rehabilitation' },
                { name: 'Transitional Justice Processes/Mechanisms', value: 'Transitional Justice Processes Mechanisms' },
              ]
            },
            {
              name: 'Just War Theory',
              value: 'Just War Theory',
              children: [
                { name: 'Jus Ad Bellum (Right to engage in War)', value: 'Jus Ad Bellum (Right to engage in War)' },
                { name: 'Jus in Bello (Law of War)', value: 'Jus in Bello (Law of War)' },
              ]
            },
            { name: 'Pacifism and Non-Violence', value: 'Pacifism and Non-Violence' },
          ]
        },
        { name: 'Preferential Option for the poor and vulnerable', value: 'Preferential Option for the poor and vulnerable' },
        { name: 'Security', value: 'Security' },
        {
          name: 'Solidarity/Cooperation',
          value: 'Solidarity Cooperation',
          children: [
            { name: 'Charity', value: 'Charity' },
            { name: 'Compassion/Empathy', value: 'Compassion Empathy' },
            { name: 'Service', value: 'Service' },
          ]
        },
        { name: 'Subsidiarity', value: 'Subsidiarity' },
      ]
    }
  ]
}

'use strict'
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');

var headingStyle = {
  paddingLeft: '1em',
  textAlign: 'left',
}

class Partners extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="row body partners">
        	<div className="col-sm-3 left-col">
        		<Navigation/>
        	</div>
        	<div className="col-sm-9 right-col">
        		<h1>Project Partners</h1>

        <h2>Consultants</h2>
        <div className="partners-c">
        {/*<Link to='http://law.nd.edu/' target='_blank' className="smaller">University of Notre Dame Law School</Link>*/
        /*<Link to='http://kellogg.nd.edu/' target='_blank'>Kellog Institute for International Studies</Link>*/
        /*<Link to='http://www.bc.edu/' target='_blank'>Boston College</Link>*/
        /*<Link to='http://socialconcerns.nd.edu/' target='_blank' className="smaller">Center for Social Concerns</Link>*/
        /*<Link to='http://www.exeter.ac.uk/' target='_blank' className="smaller">University of Exeter</Link>*/
        /*<Link to='https://www.scu.edu/jst/' target='_blank' className="larger">Jesuit School of Theology in Berkley</Link>*/
        /*<Link to='http://hls.harvard.edu/' target='_blank' className="smaller">Harvard Law School</Link>*/
        /*<Link to='https://www.tcd.ie/' target='_blank'>Trinity College Dublin</Link>*/
        /*<Link to='https://www.law.umich.edu/Pages/default.aspx' target='_blank'>University of Michigan Law School</Link>*/
        /*<Link to='http://www.law.ou.edu/' target='_blank' className="larger">The University of Oklahoma College of Law</Link>*/}
        
        <ul>
         <li> <strong><Link to='http://kellogg.nd.edu/faculty/fellows/carozza.shtml' target='_blank'>Carozza, Paolo </Link>       </strong>  <br/><em>Director, Helen Kellogg Instittute for International Studies; Director, JSD Program in International Human Rights Law; Concurrent Professor of Political Science</em> <br/>  Kellogg Institute for International Studies, University of Notre Dame       </li>
         <li> <strong><Link to='https://library.nd.edu/directory/employees/plawton' target='_blank'>Lawton, Pat           </Link></strong>  <br/><em>Digital Projects Librarian, Catholic Research Resources Alliance</em><br/>        Hesburgh Libraries, University of Notre Dame    </li>
         <li> <strong><Link to='https://www.scu.edu/jst/about/people-of-jst/faculty/thomas-j-massaro-sj-phd/' target='_blank'>Massaro SJ, Thomas    </Link></strong>  <br/><em>Dean of Jesuit School of Theology; Professor of Moral Theology</em><br/>          Jesuit School of Theology, Santa Clara University  </li>
         <li> <strong><Link to='https://www.law.umich.edu/FacultyBio/Pages/FacultyBio.aspx?FacID=MCCRUD' target='_blank'>McCrudden, Christopher</Link></strong>  <br/><em>William W. Cook Global Law Professor</em><br/>           Michigan Law, University of Michigan </li>
         <li> <strong><Link to='http://hls.harvard.edu/faculty/directory/11175/Moyn' target='_blank'>Moyn, Samuel          </Link></strong>  <br/><em>Professor of Law and History</em><br/>          Harvard Law School, Harvard University  </li>
         <li> <strong><Link to='http://law.nd.edu/directory/sean-obrien/' target='_blank'>O’Brien, Sean         </Link></strong>  <br/><em>Director, LLM Program in International Human Rights Law; Assistant Director, Center for Civil and Human Rights; Concurrent Assistant Professor of Law</em> <br/>   Notre Dame Law School, University of Notre Dame       </li>
         <li> <strong><Link to='https://theology.nd.edu/people/faculty/jean-porter/' target='_blank'>Porter, Jean          </Link></strong>  <br/><em>John A O’Brien Professor of Theology</em><br/>         Department of Theology, University of Notre Dame   </li>
         <li> <strong><Link to='http://humanities.exeter.ac.uk/theology/staff/ereed/' target='_blank'>Reed, Esther          </Link></strong>  <br/><em>Associate Professor; Director of the Network for Religion in Public Life</em>  <br/>    Department of Theology and Religion, University of Exeter       </li>
         <li> <strong><Link to='http://www.law.ou.edu/content/aswad-evelyn' target='_blank'>Aswad, Evelyn         </Link></strong>  <br/><em>Professor of Law, Herman G. Kaiser Chair in International Law</em> <br/>     University of Oklahoma College of Law     </li>
         <li> <strong><Link to='https://theology.nd.edu/people/faculty/david-a-clairmont/' target='_blank'>Clairmont, David      </Link></strong>  <br/><em>Director of Master of Theological Studies, Tisch Family Associate Professor of Theology </em><br/>    Theology Department, University of Notre Dame        </li>
         <li> <strong><Link to='http://law.nd.edu/directory/richard-garnett/' target='_blank'>Garnett, Rick         </Link></strong>  <br/><em>Paul J. Schierl/Fort Howard Corporation Professor, Concurrent Professor of Political Science</em><br/>  Notre Dame Law School, University of Notre Dame          </li>
         <li> <strong><Link to='https://jesuits.georgetown.edu/members/hollenbach' target='_blank'>Hollenbach, David     </Link></strong>  <br/><em>Pedro Arrupe Distinguished Research Professor </em>  <br/>      Walsh School of Foreign Service, Georgetown University  </li>
         <li> <strong><Link to='http://www.law.ou.edu/content/mccall-brian' target='_blank'>McCall, Brian         </Link></strong>  <br/><em>Associate Dean for Academic Affairs, Associate Director of the Law Center, Director of Legal Assistant Education, Orpha and Maurice Merrill Professor in Law</em> <br/>  The University of Oklahoma College of Law         </li>
         <li> <strong><Link to='https://socialconcerns.nd.edu/content/william-purcell-mdiv' target='_blank'>Purcell, Bill         </Link></strong>  <br/><em>Associate Director for Catholic Social Tradition and Practice </em> <br/>     Center for Social Concerns, University of Notre Dame    </li>
        </ul>
        </div>
        <div style={{ backgroundColor: '#E4E1D1'}}>
         <h2>Funding</h2>
         <div className="partners-c">
             <Link to='http://kroc.nd.edu/' target='_blank'><img alt="Kroc Institute for International Peace Studies" src="/resources/images/partners/kiips.png" /></Link>
             <Link to='http://isla.nd.edu/' target='_blank'><img alt="Institute for Scholarship in the Liberal Arts" src="/resources/images/partners/isla.png" /></Link>
         </div>
        </div>
        <h2>Documents</h2>
        <div className="partners-c">
            <Link to='http://w2.vatican.va/content/vatican/en.html' target='_blank'>
            Libreria Editrice Vaticana</Link>
            <Link to='http://www.coe.int/en/web/conventions/' target='_blank'>Council of Europe</Link>
            <Link to='http://www.un.org/en/index.html' target='_blank'>United Nations</Link>
            <Link to='http://www.ilo.org/global/lang--en/index.htm' target='_blank'>International Labor Organization</Link>
            <Link to='http://www.oas.org/en/default.asp' target='_blank'>Organization of American States</Link>
            <Link to='https://www.icrc.org/' target='_blank'>
            
            International Committee of the Red Cross</Link>
            <Link to='http://www.au.int/' target='_blank'>African Union</Link>
            <Link to='http://www.usccb.org/' target='_blank'>United States Conference of Catholic Bishops</Link>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        	</div>
        </div>
        <FooterHome/>
      </div>
    );
  }

}

export default Partners;

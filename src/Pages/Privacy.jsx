import React from "react";
import { Header } from "../components/HomePage/Header";
import { Bottom } from "../components/HomePage/Bottom";
import { useEffect } from "react";
import Banner from "../components/HomePage/Banner";

function Privacy() {
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <section class="policy space">
        <div class="container">
          <div class="row">
            <div
              class="col-md-12 mx-auto mt-5
            "
            >
              <div class="p-4">
                <h3 class="bg-grey">
                  1.1. Who is <span class="bg-grey">My Travel Sarthi</span>?
                </h3>
                <p>
                  EBIX Travels (ANNAMALAI SOFT SOLUTION){" "}
                  <b>
                    (&quot;<span class="bg-grey">My Travel Sarthi</span>&quot;)
                  </b>{" "}
                  is an online travel, accommodation, and allied reservation
                  service provider for its customers and agents (&quot;{" "}
                  <b>End Users&</b>
                  quot;). My Travel Sarthi owns and operates the websites,
                  http://www.takeatickets.com (collectively the
                  <b> &quot;Websites&quot;</b> ) and mobile applications (on
                  various platforms including Android, iOS and Windows)
                  (collectively called{" "}
                  <b>(&quot;Mobile Applications&quot;). </b> The Websites and
                  the Mobile Applications enable End Users to make travel and
                  accommodation related bookings and reservations. For providing
                  the Services (as defined herein){" "}
                  <span class="bg-grey">My Travel Sarthi</span> has entered into
                  contracts/arrangements with various holiday, hotel, transport
                  and payment gateway service providers{" "}
                  <b>(&quot;Third Party Service Providers&quot;)</b>.
                </p>
              </div>
              <div class="p-4">
                <h3 class="bg-grey">1.2. What is this Privacy Policy?</h3>
                <p>
                  This privacy policy <b> (&quot;Privacy Policy&quot;) </b>{" "}
                  describes <span class="bg-grey">My Travel Sarthi</span> &#39;s
                  policies and procedures on the collection, use and disclosure
                  of the information provided by End Users and the Visitors (as
                  defined herein) of the Websites and the Mobile Applications
                  (together referred to as &quot;Users&quot;).{" "}
                  <span class="bg-grey">My Travel Sarthi</span> shall not use
                  the Users&#39; information in any manner except as provided
                  under this Privacy Policy. Every User who accesses or uses the
                  Websites or the Mobile Applications shall be bound by this
                  Privacy Policy.
                </p>
              </div>
              <div class="p-4">
                <h3 class="bg-grey">1.3. Why this Privacy Policy</h3>
                <ul class="p-0">
                  <li>This Privacy Policy is published in compliance of:</li>
                  <li>Section 43A of the Information Technology Act, 2000;</li>
                  <li>
                    Regulation 4 of the Information Technology (Reasonable
                    Security Practices and Procedures and Sensitive Personal
                    Information) Rules, 2011 <b> (&quot;SPI Rules&quot;);</b>{" "}
                    and
                  </li>
                  <li>
                    Regulation 3(1) of the Information Technology
                    (Intermediaries Guidelines) Rules, 2011.
                  </li>
                  <li>This Privacy Policy states the following:</li>
                  <li>
                    The type of information collected from the Users, including
                    Sensitive Personal Data Or Information (as defined below);
                  </li>
                  <li>
                    The purpose, means and modes of usage of such information;
                    and
                  </li>
                  <li>
                    How and to whom{" "}
                    <span class="bg-grey">My Travel Sarthi</span> will disclose
                    such information.
                  </li>
                </ul>
              </div>
              <div class="p-4">
                <h3 class="bg-grey">1.4. What is Personal Information</h3>
                <p>
                  &quot;Personal Information&quot; is defined under the SPI
                  Rules to mean any information that relates to a natural
                  person, which, either directly or indirectly, in combination
                  with other information available or likely to be available
                  with a body corporate, is capable of identifying such person.
                </p>
                <p>
                  The SPI Rules further define &quot;Sensitive Personal Data or
                  Information&quot; of a person to mean Personal Information
                  about that person relating to: Passwords;
                </p>
                <ul class="p-0">
                  <li>
                    Financial information such as bank accounts, credit and
                    debit card details or other payment instrument details;
                  </li>
                  <li>Physical, physiological and mental health condition;</li>
                  <li>Sexual orientation;</li>
                  <li>Medical records and history;</li>
                  <li>Biometric information;</li>
                  <li>
                    Information received by body corporates under lawful
                    contract or otherwise;
                  </li>
                  <li>
                    User details as provided at the time of registration or
                    thereafter; and
                  </li>
                  <li>Call data records.</li>
                </ul>
                <p>
                  Information that is freely available in the public domain or
                  accessible under the Right to Information Act, 2005 or any
                  other law will not be regarded as Sensitive Personal Data or
                  Information.
                </p>
              </div>

              <h2 class=""> Privacy Statements</h2>
              <div class="p-4">
                <h3 class="bg-grey">2.1. Visitors Note:</h3>
                <p>
                  No Sensitive Personal Data or Information is automatically
                  collected by <span class="bg-grey">My Travel Sarthi</span>{" "}
                  from any visitors of the Websites who are merely perusing or
                  browsing the Websites <b>(&quot;Visitor&quot;).</b>
                </p>
                <p>
                  Nevertheless, certain provisions of this Privacy Policy are
                  applicable to Visitors, and Visitors are also required to read
                  and understand the privacy statements set out herein, failing
                  which they are required to leave the Websites immediately.
                </p>
                <p>
                  {" "}
                  <b>A User will not merely be a Visitor if</b> the User has
                  willingly submitted any personal data or information
                  (including phone numbers, email ids, responses to surveys,
                  etc.) to <span class="bg-grey">My Travel Sarthi</span> through
                  any means, including email, post, telephone calls, telephonic
                  messaging or through the registration process on the Websites
                  or downloaded the Mobile Application(s) on your mobile
                  telecommunications device. All such visitors will be deemed to
                  be, and will be treated as, End Users for the purposes of this
                  Privacy Policy, and in which case, all the statements in this
                  privacy policy apply to the User.
                </p>
                <p>
                  <b>
                    If you, as a Visitor, have inadvertently browsed any other
                    pages of the Websites prior to reading the privacy
                    statements set out herein
                  </b>
                  , and you do not agree with the manner in which information is
                  obtained, stored or used, merely quitting this browser
                  application should ordinarily clear all temporary cookies
                  installed by <span class="bg-grey">My Travel Sarthi</span>.
                  All visitors, however, are encouraged to use the &quot;clear
                  cookies&quot; functionality of their browsers to ensure such
                  clearing / deletion, as{" "}
                  <span class="bg-grey">My Travel Sarthi</span>
                  cannot guarantee, predict or provide for the behaviour of the
                  equipment of all the visitors of the Websites.
                </p>
              </div>
              <div class="p-4">
                <h3 class="bg-grey">2.2. Users Note</h3>
                <p>This section of the Privacy Policy applies to all Users.</p>
                <p>
                  A condition of each User&#39;s use of and access to the
                  Websites, Mobile Applications and to the other services
                  provided by <span class="bg-grey">My Travel Sarthi</span> to
                  End Users (together with the Websites and Mobile Applications,
                  the <b> (&quot;Services&quot;)</b> is his/her/its acceptance
                  of the terms of use available at My Travel Sarthi.com{" "}
                  <b> (&quot;Terms of Use&quot;),</b> which also involves
                  acceptance of the terms of this Privacy Policy. Any User who
                  does not agree with any provisions of the same is required to
                  leave the Websites and/or stop using and delete the Mobile
                  Applications immediately.
                </p>
                <p>
                  When browsing the Websites, a User is not required to provide
                  Personal Information unless and until such User chooses to
                  avail or sign up for any of the Services.
                </p>
                <p>
                  Due to the communications standards on the Internet, when a
                  User visits the Website, My Travel Sarthi automatically
                  receives the URL of the site from which such User came and the
                  site to which such User is going when he/she/it leaves.{" "}
                  <span class="bg-grey">My Travel Sarthi</span> also receives
                  the Internet Protocol <b> (&quot;IP&quot;)</b> address of each
                  User&#39;s computer (or the proxy server a User used to access
                  the Internet), the User&#39;s computer operating system and
                  type of web browser the User is using, email patterns, as well
                  as the name of User&#39;s ISP. This information is used to
                  analyze overall Users&#39; trends to help Via improve its
                  Services. The linkage between User&#39;s IP address and
                  User&#39;s personally identifiable information is not shared
                  with third-parties without such User&#39;s permission or
                  except when required by law or except where required to
                  provide or facilitate the Services. Notwithstanding the above,
                  the User acknowledges{" "}
                  <span class="bg-grey">My Travel Sarthi</span> right to share
                  some of the aggregate findings (not the specific data) with
                  advertisers, sponsors, investors, strategic partners, and
                  others in order to help grow its business.
                </p>
                <p>
                  The Websites and the Mobile Applications use temporary cookies
                  to store certain data. My Travel Sarthi does not store
                  personally identifiable information in the cookies.
                  Information collected by My Travel Sarthi, by any means
                  whatsoever, that does not personally identify the User as an
                  individual (such as, patterns of utilization described above)
                  is exclusively owned by{" "}
                  <span class="bg-grey">My Travel Sarthi</span> and may be used
                  by
                  <span class="bg-grey">My Travel Sarthi</span> and Third Party
                  Service Providers for the technical administration of the
                  Websites, Mobile Applications, User administration, research
                  and development, business development, statistical analysis
                  and business intelligence purposes. Additionally
                  <span class="bg-grey">My Travel Sarthi</span> may sell or
                  otherwise transfer such research, statistical or intelligence
                  data in an aggregated or non-personally identifiable form to
                  third parties and affiliates.
                </p>
                <p>
                  <b>
                    We may disclose to third party services certain personally
                    identifiable information listed below:
                  </b>
                </p>
                <ul class="p-0">
                  <li>
                    <b>
                      information you provide us such as name, email, mobile
                      phone number.
                    </b>
                  </li>
                  <li>
                    information we collect as you access and use our service,
                    including device information, location and network carrier.
                  </li>
                </ul>
                <p>
                  <b>
                    This information is shared with third party service
                    providers so that we can:
                  </b>
                </p>
                <ul class="p-0">
                  <li>personalize the app for you</li>
                  <li>perform behavioral analytics</li>
                </ul>
                <p>
                  A User can set or amend his/her/its web browsers to delete or
                  disable cookies. If a User chooses to disable cookies on
                  his/her/its computer or mobile telecommunication device, it
                  may impair, degrade or restrict access to certain areas of the
                  Websites or the Mobile Applications. Merely closing the web
                  browser should ordinarily clear all temporary cookies
                  installed by <span class="bg-grey">My Travel Sarthi</span>.
                  However, Users are encouraged to use the &quot;clear
                  cookies&quot; functionality of their browsers to ensure
                  deletion, as Via cannot guarantee, predict or provide for the
                  behaviour of the equipment of all the Users of the Websites.
                </p>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> may allow other
                  companies or entities to serve advertisements to Users. These
                  companies or entities include third party ad servers,
                  advertisement agencies, advertisement technology vendors and
                  research firms. <span class="bg-grey">My Travel Sarthi</span>{" "}
                  may &quot;target&quot; some ads to Users that fit a certain
                  general profile. <span class="bg-grey">My Travel Sarthi</span>{" "}
                  does NOT use personally identifiable information to target
                  ads. In the course of serving advertisements or optimizing the
                  Services to its Users,{" "}
                  <span class="bg-grey">My Travel Sarthi</span> may allow
                  authorized third parties to place or recognize a unique cookie
                  on the User&#39;s browser.
                </p>
                <p>
                  This Privacy Policy applies to the Websites, Mobile
                  Applications and Services that are owned and operated by
                  <span class="bg-grey">My Travel Sarthi</span>.{" "}
                  <span class="bg-grey">My Travel Sarthi</span>
                  does not exercise control over the websites displayed as
                  search results or links from within its Services. These other
                  sites may place their own cookies or other files on the
                  Users&#39; computer, collect data or solicit Personal
                  Information from the Users, for which{" "}
                  <span class="bg-grey">My Travel Sarthi</span> is not
                  responsible or liable. Accordingly,{" "}
                  <span class="bg-grey">My Travel Sarthi</span> does not make
                  any representations concerning the privacy practices or
                  policies of such third parties or terms of use of such
                  websites, nor does{" "}
                  <span class="bg-grey">My Travel Sarthi</span> guarantee the
                  accuracy, integrity, or quality of the information, data,
                  text, software, sound, photographs, graphics, videos, messages
                  or other materials available on such websites. The inclusion
                  or exclusion does not imply any endorsement by My Travel
                  Sarthi of such websites, the websites&#39; provider, or the
                  information on the website. My Travel Sarthi encourages the
                  Users to read the privacy policies of such websites.
                </p>
                <p>
                  When a User visits or uses the Websites or the Mobile
                  Applications by or through a mobile device, My Travel Sarthi
                  may access, collect, monitor and/or remotely store
                  &quot;location data,&quot; which may include global
                  positioning system coordinates (e.g. latitude and/or
                  longitude) or similar information regarding the location of
                  the mobile device. Location data does not collect or share any
                  personally identifiable information about the User.
                </p>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> may keep records
                  of telephone calls received from and made to Users for the
                  purpose of administration of Services, research and
                  development, business development or for User administration.
                </p>
                <p>
                  The Websites may enable Users to communicate with other Users
                  or to post information to be accessed by others, whereupon
                  other Users may collect such data.{" "}
                  <span class="bg-grey">My Travel Sarthi</span>
                  hereby{" "}
                  <b>
                    {" "}
                    expressly disclaims any liability for any misuse of such
                    information that is made available by Users in such a
                    manner, neither does My Travel Sarthi warrant or guarantee
                    any such data or communication.
                  </b>
                </p>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> does not collect
                  information about the Users of the Websites and the Mobile
                  Applications from other sources, such as public records or
                  bodies, or private organisations, save and except for the
                  purposes of registration of the End Users.
                </p>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> may choose to
                  conduct contests and surveys to collect relevant information
                  about the Users&#39; preferences. These surveys and contests
                  are optional and if the User chooses to respond, his/her/its
                  responses will be kept anonymous. The demographic information
                  that the User provides in the registration process and through
                  any surveys or contests is used to help{" "}
                  <span class="bg-grey">My Travel Sarthi</span>
                  improve its services to meet the needs and preferences of
                  Users.
                </p>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> does not
                  knowingly collect personal data from children (Only persons
                  above the aged of 18 shall be permitted to use the Services as
                  provided in the Terms of Use).
                </p>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> has implemented
                  industry standard security policies, rules and technical
                  measures to protect the personal data that it has under its
                  control from unauthorised access, improper use or disclosure,
                  unauthorised modification and unlawful destruction or
                  accidental loss.{" "}
                  <b>
                    {" "}
                    It is expressly stated that My Travel Sarthi shall not be
                    responsible for any breach of security or for any actions of
                    any third parties that receive Users&#39; personal data or
                    events that are beyond the reasonable control of{" "}
                    <span class="bg-grey">My Travel Sarthi</span> including,
                    acts of government, computer hacking, unauthorized access to
                    computer data and storage device, computer crashes, breach
                    of security and encryption, etc.
                  </b>
                </p>

                <p>
                  <span class="bg-grey">My Travel Sarthi</span> will not
                  disclose any Personal Information to governmental institutions
                  or authorities unless such disclosure is requisitioned under
                  any law or judicial decree or when{" "}
                  <span class="bg-grey">My Travel Sarthi</span>, in its sole
                  discretion, deems it necessary in order to protect its rights
                  or the rights of others, to prevent harm to persons or
                  property, to fight fraud and credit risk, or to enforce or
                  apply the Terms of Use.
                </p>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> may share/use
                  Personal Information provided by Users with its subsidiaries
                  and Third Party Service Providers for the purposes of,
                </p>
                <ul class="p-0">
                  <li>(i) enabling Users to enjoy the Services,</li>
                  <li>
                    (ii) detecting and preventing identity theft, fraud and
                    other potentially illegal acts,
                  </li>
                  <li>
                    (iii) correlating related or multiple accounts to prevent
                    abuse of the Services, and facilitating joint or co-branded
                    Services requested by Users, where such Services are
                    provided by more than one corporate entity.
                  </li>
                </ul>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> may also
                  disclose or transfer the personal and other information
                  provided by the Users, to any thirty party as part of
                  reorganization or a sale of the assets of a{" "}
                  <span class="bg-grey">My Travel Sarthi</span> corporation
                  division or company. Any third party to which{" "}
                  <span class="bg-grey">My Travel Sarthi</span> transfers or
                  sells its assets will have the right to continue to use the
                  personal and other information that Users provide to{" "}
                  <span class="bg-grey">My Travel Sarthi</span>.
                </p>
                <p>
                  All <span class="bg-grey">My Travel Sarthi</span> employees
                  and data processors, who have access to, and are associated
                  with the processing of Sensitive Personal Data or Information
                  provided by Users, are obliged to respect the confidentiality
                  of every User&#39;s Sensitive Personal Data or Information.
                </p>
                <p>
                  The Users acknowledge that this Privacy Policy is part of the
                  Terms of Use and unconditionally agree that becoming a User of
                  the Websites, Mobile Applications and its Services signifies
                  their assent to this Privacy Policy. The User&#39;s visit to
                  the Websites, use of the Mobile Applications and any dispute
                  over privacy is subject to this Privacy Policy and Terms of
                  Use. <span class="bg-grey">My Travel Sarthi</span> may update
                  this privacy policy at any time, with or without advance
                  notice. In the event there are significant changes in the way{" "}
                  <span class="bg-grey">My Travel Sarthi</span>
                  treats User&#39;s personally identifiable information,{" "}
                  <span class="bg-grey">My Travel Sarthi</span> will display a
                  notice on the Websites, Mobile Application or send Users an
                  email, as provided for above. Unless stated otherwise,{" "}
                  <span class="bg-grey">My Travel Sarthi</span> current privacy
                  policy applies to all information that{" "}
                  <span class="bg-grey">My Travel Sarthi</span>
                  has about Users and their account (if applicable).
                  Notwithstanding the above,{" "}
                  <span class="bg-grey">My Travel Sarthi</span> shall not be
                  required to notify the Users of any changes made to the
                  privacy policy. If a User uses the Websites or the Mobile
                  Applications after notice of changes have been sent to such
                  User or published on the Websites or the Mobile Applications,
                  such User hereby provides his/her/its consent to the changed
                  practices.
                </p>
              </div>

              <div class="p-4">
                <h3 class="bg-grey">2.3. End User Note:</h3>
                <p>
                  All the statements in this Privacy Policy apply to all End
                  Users, and all End Users are therefore required to read and
                  understand the privacy statements set out herein prior to
                  submitting any Sensitive Personal Data or Information to{" "}
                  <span class="bg-grey">My Travel Sarthi</span>, failing which
                  they shall be required to leave the Websites.
                </p>
                <p>
                  End Users may make or confirm bookings through the Websites
                  and/or Mobile Applications. End Users may make bookings on the
                  Websites without creating an account. Unregistered End Users
                  using the Websites can make/confirm bookings by providing
                  their name and phone number. However in order to have access
                  to all the features and benefits on the Websites, End Users
                  must first create an account on the Websites. To create an
                  account on the Websites and/or download and use the Mobile
                  Applications, the End User may be required to provide the
                  following information, which such End User recognizes and
                  expressly acknowledges to be Personal Information allowing
                  others, including{" "}
                  <span class="bg-grey">My Travel Sarthi</span>, to identify the
                  User name, User ID, email address, country, home and office
                  address, ZIP/postal code, age, phone number, password chosen
                  by the End User, valid financial account information, etc.
                  Other information requested on the registration page,
                  including the ability to opt for receiving promotional offers
                  from <span class="bg-grey">My Travel Sarthi</span>, is
                  optional. <span class="bg-grey">My Travel Sarthi</span> may,
                  in future, include other optional requests for information
                  from the End User to help{" "}
                  <span class="bg-grey">My Travel Sarthi</span> to customize the
                  Websites and the Mobile Applications to deliver personalized
                  information to the End User. Without the End User&#39;s
                  consent,
                  <span class="bg-grey">My Travel Sarthi</span> will not share,
                  rent or sell any Personal Information with third parties in
                  any way other than what is disclosed in this privacy policy.
                </p>
                <p>
                  Where a User used the Services for making bookings for persons
                  other than himself/herself/itself; the User shall confirm and
                  represent that each of such persons shall be deemed to have
                  agreed and authorised the User to disclose their Personal
                  Information to TakeATickets.
                </p>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> may require the
                  End User to pay for the Services with a credit card, wire
                  transfer, debit card or cheque.{" "}
                  <span class="bg-grey">My Travel Sarthi</span> will collect
                  such End User&#39;s credit card number and/or other financial
                  institution information such as bank account numbers and will
                  use that information for the billing and payment processes,
                  including but not limited to the use and disclosure of such
                  credit card number and information to third parties as
                  necessary to complete such billing operation. Verification of
                  credit information, however, is accomplished solely by the End
                  User through the authentication process. The End User&#39;s
                  credit-card/debit card details are transacted upon secure
                  sites of approved payment gateways which are digitally under
                  encryption, thereby providing the industry standard degree of
                  care as per current technology. The End User is advised,
                  however, that Internet technology is not completely safe and
                  User should exercise discretion on using the same.
                </p>
                <p>
                  The End User acknowledges that all the information provided to{" "}
                  <span class="bg-grey">My Travel Sarthi</span> by the End User,
                  including Personal Information, is voluntary. The End User has
                  the right to withdraw his/her/its consent at any time, in
                  accordance with the terms of this Privacy Policy and the Terms
                  of Use, but please note that withdrawal of consent will not be
                  retroactive.
                </p>
                <p>
                  If an End User has inadvertently submitted any information to{" "}
                  <span class="bg-grey">My Travel Sarthi</span> prior to reading
                  this Privacy Policy, and does not agree with the manner in
                  which such information is collected, stored, or used, then the
                  End User may access, modify, correct and eliminate the data
                  about him/her/it which has been collected pursuant to
                  his/her/its decision to become an End User. If the End User
                  updates any of his/her/its information, My Travel Sarthi may
                  keep a copy of the information which such End User originally
                  provided to My Travel Sarthi in its archives for uses
                  documented herein.{" "}
                  <span class="bg-grey">My Travel Sarthi</span> takes the End
                  Users&#39; rights seriously and encourages the End User to use
                  them if the End User deems this to be appropriate. The End
                  User may exercise these rights by emailing{" "}
                  <span class="bg-grey">My Travel Sarthi</span> at
                  support@takeatickets.com.
                </p>
                <p>
                  <span class="bg-grey">My Travel Sarthi</span> may communicate
                  with End Users through emails, notices posted on the Websites,
                  text, and other forms of messaging. An End User can change
                  his/her/its email and contact preferences at any time by
                  logging into their account on the Websites and changing their
                  account settings.
                </p>
                <p>
                  The End Users&#39; personally identifiable information they
                  choose to provide on the Websites and/or the Mobile
                  Applications is used to help the Users describe / identify
                  themselves. Additionally My Travel Sarthi may choose to
                  conduct contests and surveys to collect relevant information
                  about the End Users&#39; preferences. These surveys and
                  contests are optional and if an End User chooses to respond,
                  his/her/its responses will be kept anonymous. The demographic
                  information that <span class="bg-grey">My Travel Sarthi</span>{" "}
                  collects in the registration process and through any surveys
                  or contests is used to help{" "}
                  <span class="bg-grey">My Travel Sarthi</span> improve its
                  Services to meet the needs and preferences of the End Users.
                </p>
              </div>

              <div class="p-4">
                <h3 class="bg-grey">3. Registration Process</h3>
                <p>
                  3.1. As part of the registration process,{" "}
                  <span class="bg-grey">My Travel Sarthi</span> may collect the
                  following Personal Information from End Users
                </p>
                <ul class="p-0">
                  <li>(i) name,</li>
                  <li> (ii) gender,</li>
                  <li> (iii) age,</li>
                  <li>
                    {" "}
                    (iv) contact information including favourite locations
                    including home address and office address, email address and
                    mobile number,
                  </li>
                  <li>(v) password chosen by the End User,</li>
                  <li>
                    (vi) demographic information such as postal code,
                    preferences, interests, etc.
                  </li>
                  <li>
                    (vii) information regarding type of cell phone used, and
                  </li>
                  <li>(viii) other information as the End User may provide.</li>
                </ul>
                <p>
                  3.3. In addition, the email address provided by the User will
                  be used to confirm his/her/its new registration and each
                  transaction that is initiated. As a member of{" "}
                  <span class="bg-grey">My Travel Sarthi</span>, the End User
                  may also receive updates about special offers, new services,
                  and other noteworthy events. However, you may, at any time,
                  choose to no longer receive such types of emails. For further
                  details, please refer to the Clause 4 of this Privacy Policy.
                </p>
                <p>
                  3.4. All the information listed in Clause 3.1 of this privacy
                  policy <b> (&quot;End User Information&quot;) </b> is
                  maintained by
                  <span class="bg-grey">My Travel Sarthi</span> in electronic
                  form on online severs/clouds systems and shall be accessible
                  by certain employees of{" "}
                  <span class="bg-grey">My Travel Sarthi</span> as mentioned
                  below. End User Information may also be converted to physical
                  form from time to time. Regardless of the manner of storage,{" "}
                  <span class="bg-grey">My Travel Sarthi</span>
                  will keep all End User Information confidential, and will only
                  disclose End User Information to the persons mentioned below:
                  Its employees on a need-to-know basis. All{" "}
                  <span class="bg-grey">My Travel Sarthi</span>
                  employees and data processors, who have access to, and are
                  associated with the processing of Sensitive Personal Data or
                  Information, are obliged to respect the confidentiality of
                  every End User&#39;s Sensitive Personal Data or Information.
                </p>
                <p>
                  Third Party Service Providers to the extent necessary to
                  provide the End Users with the Services. My Travel Sarthi may
                  provide the Personal Information to Third Party Service
                  Providers who work on behalf of or with
                  <span class="bg-grey">My Travel Sarthi</span> to provide End
                  Users with the Services, to help
                  <span class="bg-grey">My Travel Sarthi</span> communicate with
                  End Users or to maintain the Websites and the Mobile
                  Applications. Generally the Third Party Service Providers do
                  not have any independent right to share this information,
                  however certain service providers who provide services on the
                  Websites, including the providers of online communications
                  services, will have rights to use and disclose the Personal
                  Information collected in connection with the provision of
                  these services in accordance with their own privacy policies.
                </p>
                <p>
                  Notwithstanding the above,{" "}
                  <span class="bg-grey">My Travel Sarthi</span> shall not be
                  responsible for any breach of security or for any actions of
                  any third parties that receive Users&#39; personal data or
                  events that are beyond the reasonable control of Take A
                  Tickets including, acts of government, computer hacking,
                  unauthorised access to computer data and storage device,
                  computer crashes, breach of security and encryption, etc.
                </p>
              </div>

              <div class="p-4">
                <h3 class="bg-grey">4. Opt-Out Policy</h3>
                <p>
                  4.1. The subsidiaries and Third Party Service Providers with
                  whom <span class="bg-grey">My Travel Sarthi</span> may share
                  Personal Information provided by Users are not permitted to
                  market their own services or send promotional e-mails to
                  Users. <span class="bg-grey">My Travel Sarthi</span> provides
                  all Users with the opportunity to opt-out of receiving
                  non-essential, promotional, or marketing-related communication
                  from itself or its partners. These settings can be found on
                  Websites.
                </p>
                <p>
                  4.2. If a User wishes to remove his/her/its contact
                  information from all{" "}
                  <span class="bg-grey">My Travel Sarthi</span> lists and
                  newsletters, the User can click on the &quot;unsubscribe&quot;
                  link or follow the instructions in each e-mail message.
                  Alternatively, the User can contact{" "}
                  <span class="bg-grey">My Travel Sarthi</span> at
                  support@takeatickets.com.
                  <span class="bg-grey">My Travel Sarthi</span> reserves the
                  right to limit membership based on availability of contact
                  information. All Users will be notified by email prior to any
                  actions taken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bottom />
    </>
  );
}

export default Privacy;

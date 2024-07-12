import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import labradorImage from '../assets/LABRADOR.jpg';
import germanShepherdImage from '../assets/GERMAN_SHEPHEARD.jpg';
import goldenRetrieverImage from '../assets/GOLDEN_RETRIVER.jpg';
import frenchBulldogImage from '../assets/FRENCH_BULLDOG.jpg';
import poodleImage from '../assets/POODLE.jpg';
import siberianHuskyImage from '../assets/SIBERIAN_HUSKY.jpg';
import maineCoonImage from '../assets/MAINE_COON.jpg';
import persianCatImage from '../assets/PERSIAN_CAT.jpg';
import siameseCatImage from '../assets/SIAMESE_CAT.jpg';
import newfoundlandImage from '../assets/NEWFOLUNFALAND.jpeg';
import shibaInuImage from '../assets/SHIBA_INU.jpeg';
import rottweilerImage from '../assets/ROTTWEILER.jpg';
 

const HomePage = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgba(224, 213, 213, 0.734)" }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Buddy </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/buy">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.aphis.usda.gov/animal-care">Help</a>
                                </li>
                            </ul>
                            
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signin">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/login">Log In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="custom-division container-fluid  pt-5" >
                <div className="custom-division-content">
                    <div className="homepage" id="homepage">
                        <h2 className='text-black text-3xl'>Welcome to Buddy</h2>
                        <p className='text-black ' style={{fontSize:"20px"}}>At Buddy, we believe that every pet deserves a loving home and the best care possible. Whether you’re looking to adopt a new furry friend or need expert advice on pet care, we’re here to help. Our mission is to connect pets with their forever families and provide the resources needed to keep them happy and healthy.</p>
                        <p className='text-black  text-xl' style={{fontSize:"20px"}}><strong>Why Choose Buddy?</strong></p>
                        <ul className='text-black text-xl' style={{ fontSize: "20px"   }}>
    <li><strong>Explore a Diverse Range of Pets:</strong> Discover playful puppies, curious kittens, loyal dogs, and affectionate cats suited to your home. Find the perfect companion for your family.</li>
    <li><strong>Expert Guidance on Pet Care:</strong> Receive personalized advice from qualified specialists on nutrition, training, health, and overall pet wellness. Ensure your pet's happiness and longevity with expert tips.</li>
    <li><strong>Join a Vibrant Pet Lover Community:</strong> Engage in forums, events, and workshops with fellow pet enthusiasts to share knowledge and experiences. Connect with a supportive community that shares your love for pets.</li>
    <li><strong>Attend Exciting Adoption Events:</strong> Meet pets in person, enjoy interactive activities, and find your perfect match at our regular adoption events. Experience memorable moments while finding your new best friend.</li>
    <li><strong>Stay Informed with Comprehensive Resources:</strong> Access our informative blog for tips, stories, and the latest in pet care and adoption news. Stay updated on pet care trends and adoption success stories.</li>
</ul>

                        <p className='text-black ' style={{fontSize:"20px"}}>Ready to find your perfect pet or need some help with your current companion? Let Buddy be your trusted partner in pet adoption and care.</p>
                        <div className="margin-top-20">
                            <Link to="/care" className="btn btn-primary read-more-button">
                                More About Pet Care
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-division container-fluid pt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Card 1 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={labradorImage} alt="Labrador Retriever" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Labrador Retriever</h2>
                                <p className="card-text">Labrador Retrievers are friendly, outgoing, and high-spirited dogs known for their intelligence and obedience. They are great family pets and excel in various roles, including as service dogs.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={germanShepherdImage} alt="German Shepherd" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">German Shepherd</h2>
                                <p className="card-text">German Shepherds are highly intelligent and versatile dogs known for their loyalty and courage. They are often used in police and military roles, as well as for search .</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={goldenRetrieverImage} alt="Golden Retriever" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Golden Retriever</h2>
                                <p className="card-text">Golden Retrievers are gentle, friendly, and tolerant dogs that make excellent companions for families. They are known for their intelligence, obedience, and love for outdoor activities.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={frenchBulldogImage} alt="French Bulldog" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">French Bulldog</h2>
                                <p className="card-text">French Bulldogs are small, muscular dogs with  bat-like ears and a playful yet affectionate temperament. They are adaptable to various living situations and are known for their charming personalities.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={poodleImage} alt="Poodle" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Poodle</h2>
                                <p className="card-text">Poodles are highly intelligent and energetic dogs known for their distinctive curly coats. They come in three sizes (standard, miniature, and toy) and excel in obedience and agility training.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={siberianHuskyImage} alt="Siberian Husky" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Siberian Husky</h2>
                                <p className="card-text">Siberian Huskies are medium-sized working dogs known for their endurance and striking appearance. They are friendly, alert, and gentle, making them great companions for active individuals or families.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={maineCoonImage} alt="Maine Coon" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Maine Coon</h2>
                                <p className="card-text">Maine Coons are one of the largest domestic cat breeds, known for their friendly and sociable nature. They have a distinctive appearance with tufted ears and bushy tails, and they make wonderful family pets.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={persianCatImage} alt="Persian Cat" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Persian Cat</h2>
                                <p className="card-text">Persian Cats are known for their long, luxurious coats and calm, affectionate personalities. They are gentle and enjoy a relaxed lifestyle, making them ideal for a quiet home environment.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 9 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={siameseCatImage} alt="Siamese Cat" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Siamese Cat</h2>
                                <p className="card-text">Siamese Cats are known for their sleek bodies, striking blue eyes. They are highly social and enjoy interacting with their human companions, making them great pets for those who can provide plenty of attention.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 10 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={newfoundlandImage} alt="Newfoundland" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Newfoundland</h2>
                                <p className="card-text">Newfoundlands are large, gentle giants known for their sweet temperaments and strong swimming abilities. They are excellent with children and make loyal and protective family pets.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 11 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={shibaInuImage} alt="Shiba Inu" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Shiba Inu</h2>
                                <p className="card-text">Shiba Inus are small, agile dogs with a fox-like appearance and spirited personality. They are known for their independence and cleanliness, making them a popular choice for pet owners.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 12 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={rottweilerImage} alt="Rottweiler" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Rottweiler</h2>
                                <p className="card-text">Rottweilers are powerful, confident dogs known for their protective nature and loyalty to their families. They are highly trainable and excel in various roles, including as guard dogs and service animals.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="container-fluid pt-5" style={{ backgroundColor: "rgba(62, 73, 2, 0.986)" }}>
    <div className="row">
        <div className="col-md-4"style={{ color: "white" }}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
                <li><i className="bi bi-envelope"></i> Email: info@buddy.com</li>
                <li><i className="bi bi-telephone"></i> Phone: +1 123 456 7890</li>
                <li><i className="bi bi-geo-alt"></i> Address: 123 Pet Street, Pet City, PC 12345</li>
            </ul>
        </div>
        <div className="col-md-4" style={{ color: "white" }}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/contactme" className="footer-link">Contact</Link></li>
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="https://www.aphis.usda.gov/animal-care" className="footer-link">Help</a></li>
            </ul>
        </div>
        <div className="col-md-4" style={{ color: "white" }}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
                <li><a href="https://www.aphis.usda.gov/animal-care" className="footer-link">Facebook</a></li>
                <li><a href="https://www.aphis.usda.gov/animal-care" className="footer-link">Twitter</a></li>
                <li><a href="https://www.aphis.usda.gov/animal-care" className="footer-link">Instagram</a></li>
                <li><a href="https://www.aphis.usda.gov/animal-care" className="footer-link">LinkedIn</a></li>
            </ul>
        </div>
    </div>
    <div className="text-center py-3" style={{ color: "white" }}>
        &copy; 2024 Buddy. All Rights Reserved.
    </div>
</footer>


        </>
    );
};



export default HomePage;

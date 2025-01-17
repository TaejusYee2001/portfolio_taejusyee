import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/ProjectPages.module.css';

const ETFMomentumPortfolio = () => {
	return (
		<div className={styles.container}>
			<Navbar/>
			<div className={styles.mainContent}>
				<div className={styles.title}>
					Exchange-Traded Fund Portfolio Momentum-Based Automated Trading Strategy
				</div>
				<div className={styles.linkContainer}>
					<a
						href="https://github.com/TaejusYee2001/Portfolio_Momentum_Strategy"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.linkButton}
					>
						View On GitHub
					</a>
				</div>
				<div className={styles.descriptionContainer}>
					<h1>
						Description: 
					</h1>
					<p>
						Sector ETFs are a cornerstone of modern investing, offering a streamlined way to 
						focus on specific areas of the market. Unlike broad-market funds, which track the entire economy, 
						these financial instruments are designed to represent a single sector, such as technology, healthcare, 
						or energy. This project, an automated trading strategy, leverages a portfolio of sector ETFs covering all important sectors in the market, 
						regularly rebalancing its holdings in each ETF — and thus its exposure to a given sector — based on the 
						momentum that security exhibits over time. This design aims to capture the flow of money through different sectors in the market. 
						As it is often the case that global trends impact financial markets, this strategy implements market regime filtering using 
						the <a href="https://en.wikipedia.org/wiki/Hurst_exponent" target="_blank" rel="noopener noreferrer" className={styles.embeddedLink}>Hurst Exponent</a>, 
						only executing trades under trending market conditions in which momentum hypotheses become valid. 
					</p>
					<h1>
						Implementation:
					</h1>
					<p>
						The process for designing and implementing the trading algorithm was as follows: backtest on historical data to validate and optimize parameters, then 
						connect to an automated trading platform for live forward-testing. For the backtesting portion, I used the <a href="https://github.com/mementum/backtrader" target="_blank" rel="noopener noreferrer" className={styles.embeddedLink}>Backtrader</a> Python
						library and <a href="https://en.wikipedia.org/wiki/Monte_Carlo_method" target="_blank" rel="noopener noreferrer" className={styles.embeddedLink}>Monte Carlo Simulation</a> to determine an optimal set of input parameters (rebalancing frequency and allocation proportionality). 
						The algorithm design can be separated into four stages: data collection, feature extraction, trading logic, and buy/sell signal generation. Data collection was done using the <a href="https://eodhd.com/" target="_blank" rel="noopener noreferrer" className={styles.embeddedLink}>EODHD</a> financial
						data Python API for <a href="https://en.wikipedia.org/wiki/Survivorship_bias" target="_blank" rel="noopener noreferrer" className={styles.embeddedLink}>survivorship-bias</a> free data. Feature extraction involved computing the <a href="https://en.wikipedia.org/wiki/Relative_strength_index" target="_blank" rel="noopener noreferrer" className={styles.embeddedLink}>Relative Strength Index (RSI)</a> for 
						each security in the portfolio and the Hurst Exponent for a the S&P 500 index. Trading logic encapsulated ranking the ETF universe by RSI strength and determining whether the previously computed Hurst Exponent value fell above or below 0.5 by a statistically significant margin. Lastly, buy sell signals were generated by connecting 
						to <a href="https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-doc/" target="_blank" rel="noopener noreferrer" className={styles.embeddedLink}>Interactive Brokers (IBKR)</a> API to send orders. 
					</p>
				</div>
				<div className={styles.imageContainer}>
					<img
						src="/ETF_flow_chart.png"
						alt="ETF flow chart"
						className={styles.posterImage}
					/>
				</div>
				<div className={styles.imageContainer}>
					<img
						src="/ETF_flow_chart_detailed.png"
						alt="ETF flow chart detailed"
						className={styles.posterImage}
					/>
				</div>
				<div className={styles.descriptionContainer}>
					Shown below are Hurst Exponent values corresponding to different types of time series. Values above 0.5 correspond to trending series, and values below 0.5 correspond to mean-reverting series.
				</div>
				<div className={styles.imageContainer}>
					<img
						src="/hurst_exponent.png"
						alt="Hurst Exponent"
						className={styles.posterImage}
					/>
				</div>
				<div className={styles.descriptionContainer}>
					<h1>
						Results:
					</h1>
					<p>
						Strategy results demonstrated comparable performance to a benchmark fund (PTNQ), but with significantly lower exposure and smaller drawdown.
					</p>
				</div>
				<div className={styles.imageContainer}>
					<img
						src="/etf_momentum_backtest.png"
						alt="Backtest Results"
						className={styles.posterImage}
					/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default ETFMomentumPortfolio; 
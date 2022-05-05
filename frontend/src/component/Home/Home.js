import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "../../assets/logo.svg";
import banner from "../../assets/banner.png";
import metamask from "../../assets/metamask.png";
import MEW from "../../assets/MEW.png";
import sait from "../../assets/sait.png";
import trustwallet from "../../assets/trustwallet.png";
import coinbase from "../../assets/coinbase.jpg";
import atomic from "../../assets/atomic.png";
import binance from "../../assets/binance.png";
import bnb from "../../assets/bnb.png";
import polkadot from "../../assets/polkadot.png";
import xrp from "../../assets/xrp.png";
import stellar from "../../assets/stellar.png";
import tezos from "../../assets/tezos.png";
import theta from "../../assets/theta.png";
import tron from "../../assets/tron.png";
import cosmos from "../../assets/cosmos.png";
import kava from "../../assets/kava.png";
import filecoin from "../../assets/filecoin.png";
import solana from "../../assets/solana.png";
import ethereum_classic from "../../assets/ethereum-classic.png";
import zilliqa from "../../assets/zilliqa.png";
import elrond from "../../assets/elrond.jpg";
import waves from "../../assets/waves.png";
import icon from "../../assets/icon.png";
import ontology from "../../assets/ontology.png";
import harmony from "../../assets/harmony.jpg";
import parsiq from "../../assets/parsiq.jpg";
import uniswap from "../../assets/uniswap.png";
import pancakeswap from "../../assets/pancakeswap.png";
import coinomi from "../../assets/coinomi.png";
import safepal from "../../assets/safepal.png";
import unstoppable_domain from "../../assets/unstoppable-domain.png";
import tokenpocket from "../../assets/tokenpocket.png";
import nem from "../../assets/nem.png";
import btc from "../../assets/btc.png";
import nano from "../../assets/nano.png";
import tomo from "../../assets/tomo.png";
import iotex from "../../assets/iotex.png";
import wanchain from "../../assets/wanchain.png";
import kin from "../../assets/kin.png";
import nimiq from "../../assets/nimiq.png";
import aion from "../../assets/aion.png";
import thundertoken from "../../assets/thundertoken.png";
import aeternity from "../../assets/aeternity.png";
import nebulas from "../../assets/nebulas.png";
import fio from "../../assets/fio.png";
import gochain from "../../assets/gochain.png";
import poa from "../../assets/poa.png";
import bitpay from "../../assets/bitpay.jpg";
import callisto from "../../assets/callisto.png";
import aktionariat from "../../assets/aktionariat.png";
import atwallet from "../../assets/atwallet.png";
import guard from "../../assets/guard.png";
import aave from "../../assets/aave.jpg";
import exodus from "../../assets/exodus.jpg";
import enjin from "../../assets/enjin.jpg";
import skale from "../../assets/skale.png";
import portis from "../../assets/portis.png";
import trezor from "../../assets/trezor.png";
import squarelink from "../../assets/squarelink.png";
import torus from "../../assets/torus.jpg";
import vechain from "../../assets/vechain.jpg";
import scatter from "../../assets/scatter.jpg";
import math_wallet from "../../assets/math-wallet.png";
import fortmatic from "../../assets/fortmatic.png";
import digitex from "../../assets/digitex.png";
import ledger from "../../assets/ledger.png";
import defiat from "../../assets/defiat.jpg";
import authereum from "../../assets/authereum.png";
import flare from "../../assets/flare.jpg";
import zelcore from "../../assets/zelcore.png";
import bitkeep from "../../assets/bitkeep.png";
import coin98 from "../../assets/coin98.png";
import trustvault from "../../assets/trustvault.png";
import discord from "../../assets/discord.svg";
import telegram from "../../assets/telegram.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "NFTCHAINSPAD";
  });

  const [showMore, setShowMore] = useState(false);
  return (
    <center>
      <>
        <div className="top">
          <a href="https://github.com/UniGen" className="left">
            Github
          </a>
          <a href="/#docs" className="left">
            Docs
          </a>
          <a href="/" className="main">
            <img src={logo} alt="logo" />
          </a>
          <a href="/#wallet" className="left">
            Wallets
          </a>
          <a href="/#app" className="left">
            Apps
          </a>
        </div>
        <br />
        <div className="gFeYHJ">UniGen</div>
        <div className="lpfxqP">
          Open protocol for Generating Secured Universal Wallets Qr-Codes.
        </div>
        <br />
        <div className="dXgqeu">
          <img src={banner} alt="UniGen" />
        </div>
        <div className="bout">
          <h2 className="home">What is UniGen?</h2>
          <p>
            UniGen is an open source protocol for Generating Secured Universal
            Wallets Qr-Codes for decentralised applications to mobile wallets
            with QR code scanning or deep linking. A user can generate securely
            with any browsers from their mobile phone, making universal wallets
            a safer choice compared to desktop or browser extension wallets.
          </p>
          <br />
          <h2 className="home">How does it work?</h2>
          <p>
            UniGen connects web applications to supported{" "}
            <a href="/">mobile wallets</a>. UniGen session is started by a
            scanning a QR code (desktop) or by clicking an application deep link
            (mobile).
          </p>
        </div>
      </>
      <div className="wallets" id="wallets">
        <h1 className="home">Wallets</h1>
        <p>
          Multiple iOS and Android wallets support the UniGen protocol.
          Interaction between mobile apps and mobile browsers are supported via
          mobile deep linking.
        </p>
        <br />
        <div className="all">
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "MetaMask",
                },
              }}
            >
              <img alt="metamask" src={metamask} />
            </Link>
            <br />
            MetaMask
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "MEW Wallet",
                },
              }}
            >
              <img alt="MEW" src={MEW} />
            </Link>
            <br />
            MEW Wallet
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "SaitaMask",
                },
              }}
            >
              <img alt="sait" src={sait} />
            </Link>
            <br />
            SaitaMask
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Trust Wallet",
                },
              }}
            >
              <img alt="trustwallet" src={trustwallet} />
            </Link>
            <br />
            Trust Wallet
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Wallet Connect",
                },
              }}
            >
              <img alt="" src={logo} />
            </Link>
            <br />
            Wallet
            <br />
            Connect
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Coinbase Wallet",
                },
              }}
            >
              <img alt="coinbase" src={coinbase} />
            </Link>
            <br />
            Coinbase Wallet
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Atomic Wallet",
                },
              }}
            >
              <img alt="atomic" src={atomic} />
            </Link>
            <br />
            Atomic Wallet
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Binance Smart Chain",
                },
              }}
            >
              <img alt="binance" src={binance} />
            </Link>
            <br />
            Binance Smart Chain
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "BNB",
                },
              }}
            >
              <img alt="bnb" src={bnb} />
            </Link>
            <br />
            BNB
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Polkadot",
                },
              }}
            >
              <img alt="polkadot" src={polkadot} />
            </Link>
            <br />
            Polkadot
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "XRP",
                },
              }}
            >
              <img alt="xrp" src={xrp} />
            </Link>
            <br />
            XRP
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Stellar",
                },
              }}
            >
              <img alt="stellar" src={stellar} />
            </Link>
            <br />
            Stellar
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Tezos",
                },
              }}
            >
              <img alt="tezos" src={tezos} />
            </Link>
            <br />
            Tezos
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Theta",
                },
              }}
            >
              <img alt="theta" src={theta} />
            </Link>
            <br />
            Theta
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Tron",
                },
              }}
            >
              <img alt="tron" src={tron} />
            </Link>
            <br />
            Tron
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Cosmos",
                },
              }}
            >
              <img alt="cosmos" src={cosmos} />
            </Link>
            <br />
            Cosmos
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Kava",
                },
              }}
            >
              <img alt="kava" src={kava} />
            </Link>
            <br />
            Kava
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Filecoin",
                },
              }}
            >
              <img alt="filecoin" src={filecoin} />
            </Link>
            <br />
            Filecoin
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Solana",
                },
              }}
            >
              <img alt="solana" src={solana} />
            </Link>
            <br />
            Solana
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Ethereum Classic",
                },
              }}
            >
              <img alt="ethereum-classic" src={ethereum_classic} />
            </Link>
            <br />
            Ethereum Classic
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Zilliqa",
                },
              }}
            >
              <img alt="zilliqa" src={zilliqa} />
            </Link>
            <br />
            Zilliqa
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Elrond",
                },
              }}
            >
              <img alt="elrond" src={elrond} />
            </Link>
            <br />
            Elrond
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Waves",
                },
              }}
            >
              <img alt="waves" src={waves} />
            </Link>
            <br />
            Waves
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "ICON",
                },
              }}
            >
              <img alt="icon" src={icon} />
            </Link>
            <br />
            ICON
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Ontology",
                },
              }}
            >
              <img alt="ontology" src={ontology} />
            </Link>
            <br />
            Ontology
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Harmony",
                },
              }}
            >
              <img alt="harmony" src={harmony} />
            </Link>
            <br />
            Harmony
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Parsiq",
                },
              }}
            >
              <img alt="parsiq" src={parsiq} />
            </Link>
            <br />
            Parsiq
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Uniswap",
                },
              }}
            >
              <img alt="uniswap" src={uniswap} />
            </Link>
            <br />
            Uniswap
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "PancakeSwap",
                },
              }}
            >
              <img alt="pancakeswap" src={pancakeswap} />
            </Link>
            <br />
            PancakeSwap
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Coinomi",
                },
              }}
            >
              <img alt="coinomi" src={coinomi} />
            </Link>
            <br />
            Coinomi
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Safepal",
                },
              }}
            >
              <img alt="safepal" src={safepal} />
            </Link>
            <br />
            Safepal
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Unstoppable Domains",
                },
              }}
            >
              <img alt="unstoppable-domain" src={unstoppable_domain} />
            </Link>
            <br />
            Unstoppable Domains
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Token Pocket",
                },
              }}
            >
              <img alt="tokenpocket" src={tokenpocket} />
            </Link>
            <br />
            Token Pocket
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "NEM Wallet",
                },
              }}
            >
              <img alt="nem" src={nem} />
            </Link>
            <br />
            NEM Wallet
          </div>
          <div className="apps">
            <Link
              to={{
                pathname: "wallets/",
                state: {
                  wallet_name: "Other Wallet",
                },
              }}
            >
              <img alt="btc" src={btc} />
            </Link>
            <br />
            Other Wallet
          </div>
        </div>
        <br />
        <button onClick={() => setShowMore(!showMore)} className="btn" id="btn">
          {showMore ? "Show Less ↑" : "Show More ↓"}
        </button>
        <br />
        <br />
        <div className={showMore ? "" : "hidden"} id="hidden">
          <div className="all">
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Nano",
                  },
                }}
              >
                <img alt="nano" src={nano} />
              </Link>
              <br />
              Nano
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Tomo Chain",
                  },
                }}
              >
                <img alt="tomo" src={tomo} />
              </Link>
              <br />
              Tomo Chain
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "IoTex",
                  },
                }}
              >
                <img alt="iotex" src={iotex} />
              </Link>
              <br />
              IoTex
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Wanchain",
                  },
                }}
              >
                <img alt="wanchain" src={wanchain} />
              </Link>
              <br />
              Wanchain
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Kin",
                  },
                }}
              >
                <img alt="kin" src={kin} />
              </Link>
              <br />
              Kin
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Nimiq",
                  },
                }}
              >
                <img alt="nimiq" src={nimiq} />
              </Link>
              <br />
              Nimiq
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Aion",
                  },
                }}
              >
                <img alt="aion" src={aion} />
              </Link>
              <br />
              Aion
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Thunder Token",
                  },
                }}
              >
                <img alt="thundertoken" src={thundertoken} />
              </Link>
              <br />
              Thunder Token
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Aeternity",
                  },
                }}
              >
                <img alt="aeternity" src={aeternity} />
              </Link>
              <br />
              Aeternity
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Nebulas",
                  },
                }}
              >
                <img alt="nebulas" src={nebulas} />
              </Link>
              <br />
              Nebulas
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "FIO",
                  },
                }}
              >
                <img alt="fio" src={fio} />
              </Link>
              <br />
              FIO
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "GoChain",
                  },
                }}
              >
                <img alt="gochain" src={gochain} />
              </Link>
              <br />
              GoChain
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "POA Network",
                  },
                }}
              >
                <img alt="poa" src={poa} />
              </Link>
              <br />
              POA Network
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Callisto",
                  },
                }}
              >
                <img alt="callisto" src={callisto} />
              </Link>
              <br />
              Callisto
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "BitPay",
                  },
                }}
              >
                <img alt="bitpay" src={bitpay} />
              </Link>
              <br />
              BitPay
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Aktionariat",
                  },
                }}
              >
                <img alt="aktionariat" src={aktionariat} />
              </Link>
              <br />
              Aktionariat
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "AtWallet",
                  },
                }}
              >
                <img alt="atwallet" src={atwallet} />
              </Link>
              <br />
              AtWallet
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Guard Wallet",
                  },
                }}
              >
                <img alt="guard" src={guard} />
              </Link>
              <br />
              Guard Wallet
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "AAVE",
                  },
                }}
              >
                <img alt="aave" src={aave} />
              </Link>
              <br />
              AAVE
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Exodus",
                  },
                }}
              >
                <img alt="exodus" src={exodus} />
              </Link>
              <br />
              Exodus
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Enjin",
                  },
                }}
              >
                <img alt="enjin" src={enjin} />
              </Link>
              <br />
              Enjin
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Skale",
                  },
                }}
              >
                <img alt="skale" src={skale} />
              </Link>
              <br />
              Skale
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Portis",
                  },
                }}
              >
                <img alt="portis" src={portis} />
              </Link>
              <br />
              Portis
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Trezor",
                  },
                }}
              >
                <img alt="trezor" src={trezor} />
              </Link>
              <br />
              Trezor
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Squarelink",
                  },
                }}
              >
                <img alt="squarelink" src={squarelink} />
              </Link>
              <br />
              Squarelink
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Torus",
                  },
                }}
              >
                <img alt="torus" src={torus} />
              </Link>
              <br />
              Torus
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "VeChain",
                  },
                }}
              >
                <img alt="vechain" src={vechain} />
              </Link>
              <br />
              VeChain
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Scatter Wallet",
                  },
                }}
              >
                <img alt="scatter" src={scatter} />
              </Link>
              <br />
              Scatter Wallet
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Math Wallet",
                  },
                }}
              >
                <img alt="math-wallet" src={math_wallet} />
              </Link>
              <br />
              Math Wallet
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "FortMatic",
                  },
                }}
              >
                <img alt="fortmatic" src={fortmatic} />
              </Link>
              <br />
              FortMatic
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Digitex",
                  },
                }}
              >
                <img alt="digitex" src={digitex} />
              </Link>
              <br />
              Digitex
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Ledger",
                  },
                }}
              >
                <img alt="ledger" src={ledger} />
              </Link>
              <br />
              Ledger
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Defiat",
                  },
                }}
              >
                <img alt="defiat" src={defiat} />
              </Link>
              <br />
              Defiat
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Authereum",
                  },
                }}
              >
                <img alt="authereum" src={authereum} />
              </Link>
              <br />
              Authereum
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Flare Wallet",
                  },
                }}
              >
                <img alt="flare" src={flare} />
              </Link>
              <br />
              Flare Wallet
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Zelcore",
                  },
                }}
              >
                <img alt="zelcore" src={zelcore} />
              </Link>
              <br />
              Zelcore
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "BitKeep",
                  },
                }}
              >
                <img alt="bitkeep" src={bitkeep} />
              </Link>
              <br />
              BitKeep
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Coin98",
                  },
                }}
              >
                <img alt="coin98" src={coin98} />
              </Link>
              <br />
              Coin98
            </div>
            <div className="apps">
              <Link
                to={{
                  pathname: "wallets/",
                  state: {
                    wallet_name: "Trust Vault",
                  },
                }}
              >
                <img alt="trustvault" src={trustvault} />
              </Link>
              <br />
              Trust Vault
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div id="footer">
          <p>
            <img alt="discord" src={discord} className="footimg" />{" "}
            <a href="https://discord.gg/jhxMvxP">Discord</a>
          </p>
          <br />
          <p>
            <img alt="telegram" src={telegram} className="footimg" />{" "}
            <a href="https://t.me/UniGen_announcements">Telegram</a>
          </p>
          <br />
          <p>
            <img alt="twitter" src={twitter} className="footimg" />{" "}
            <a href="https://twitter.unigen.org/">Twitter</a>
          </p>
          <br />
          <p>
            <img alt="github" src={github} className="footimg" />{" "}
            <a href="https://github.com/UniGen">Github</a>
          </p>
          <br />
        </div>
      </footer>
    </center>
  );
};

export default Home;

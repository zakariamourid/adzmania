import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      fr: {
        translation: {
          home: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            partners: "Partenaires",
            signup: "S'inscrire",
            login: "S'identifier",
            logout: "Se déconnecter",
            heroTitle: "On prend en main vos campagnes publicitaires ",
            standOutText: "On prend en main vos campagnes publicitaires",
            adzmania: "avec",
            adzmaniaHighlight: "Adzmania",
            perfectAgent:
              "Pour investir votre budget là où il est susceptible d’avoir le plus d’impact sur votre business.",
            getStarted: "Commencer",
            section2: {
              title:
                "Vous lancez un nouveau produit ? Vous visez des parts de marché ? Vous voulez créer la préférence pour votre marque ?",
              description:
                "Nos campagnes sont créatives, performantes et engageantes.",
            },
            section3: {
              title:
                "Une expertise complète au service de l’efficacité et de la performance des campagnes de nos clients",
              description:
                "Nous vous accompagnons dans la création et la gestion de vos campagnes publicitaires sur les réseaux sociaux.",
              happyCustomer: "Clients satisfaits",
              yearsOfExperience: "Années d'expérience",
            },
            section4: {
              title: "Nos services",
              card1: {
                title: "Nos expertises",
                description:
                  "En permanence en veille sur les nouveaux leviers de communication et techniques de ciblage, nous activons des campagnes sur tous les médias On et offline.",
              },
              card2: {
                title: "Vos besoins",
                description:
                  "Les experts de Adzmania  mettent en œuvre des plans médias optimisés en fonction des objectifs et des budgets de leurs clients.",
              },
            },
            section5: {
              title: "Nos partenaires",
            },
            section6: {
              title: "Notre process pour améliorer votre croissance",
              description:
                "To stay ahead of the competition and drive revenue growth, businesses require the expertise of a digital marketing professional - just like the team at Adzmania",
            },
            getStarted: "Commencer",
            footer: {
              ContactUs: "contactez-nous",
            },
          },
          login: {
            login: "S'identifier",
            signup: "S'inscrire",
            welcome: "Bienvenue de nouveau ",
            dontHaveAccount: "Vous n'avez pas de compte ?",
          },
          signup: {
            firstName: "Prénom",
            signup: "S'inscrire",
            lastName: "Nom",
            email: "Email",
            password: "Mot de passe",
            confirmPassword: "Confirmer le mot de passe",
            alreadyHaveAccount: "Vous avez déjà un compte ?",
          },
          dashboard: {
            dashboard: "Tableau de bord",
            newOrder: "Nouvelle commande",
            orders: "Commandes",
            settings: "Paramètres",
            logout: "Se déconnecter",
            allOrders: "Toutes les commandes",
            pendingOrders: " en attente",
            completedOrders: " terminées",
            processOrders: " en cours",
            order: "Commande",
            search: "Rechercher",
          },
          NewOrder: {
            ChoosePlatform: "Choisir une plateforme",
            EnterYourInformations: "Entrez vos informations",
            EnterYourInformationsDescription:
              "Utilisez les champs ci-dessous pour entrer vos informations de commande",
            YourBudget: "Votre budget",
            YourBudgetDescription:
              "Sélectionnez ou entrez votre montant personnalisé et choisissez votre mode de paiement.",
          },
        },
      },
      en: {
        translation: {
          home: {
            home: "Home",
            about: "About",
            services: "Services",
            partners: "Partners",
            signup: "Sign Up",
            login: "Login",
            logout: "Logout",
            heroTitle: "We take care of your advertising campaigns",
            standOutText: "We take care of your advertising campaigns",
            adzmania: "with",
            adzmaniaHighlight: "Adzmania",
            perfectAgent:
              "To invest your budget where it is likely to have the most impact on your business.",
            getStarted: "Get Started",
            section2: {
              title:
                "Launching a new product? Targeting market share? Looking to build brand preference?",
              description:
                "Our campaigns are creative, performant and engaging.",
            },
            section3: {
              title:
                "A complete expertise at the service of the efficiency and performance of our clients' campaigns",
              description:
                "We support you in the creation and management of your advertising campaigns on social networks.",
              happyCustomer: "Happy Customers",
              yearsOfExperience: "Years of Experience",
            },
            section4: {
              title: "Our services",
              card1: {
                title: "Our expertise",
                description:
                  "Constantly on the lookout for new communication levers and targeting techniques, we activate campaigns on all On and offline media.",
              },
              card2: {
                title: "Your needs",
                description:
                  "The experts of Adzmania implement optimized media plans according to the objectives and budgets of their clients.",
              },
            },
            section5: {
              title: "Our partners",
            },
            section6: {
              title: "Our process to improve your growth",
              description:
                "To stay ahead of the competition and drive revenue growth, businesses require the expertise of a digital marketing professional - just like the team at Adzmania",
            },
            getStarted: "Get Started",
            footer: {
              ContactUs: "contact us",
            },
          },
          login: {
            login: "Login",
            signup: "Sign Up",

            welcome: "Welcome back",
            dontHaveAccount: "Don't have an account?",
          },
          signup: {
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            password: "Password",
            confirmPassword: "Confirm Password",
            signup: "Sign Up",
            alreadyHaveAccount: "Already have an account?",
          },
          dashboard: {
            dashboard: "Dashboard",
            newOrder: "New Order",
            orders: "Orders",
            settings: "Settings",
            logout: "Logout",
            allOrders: "All Orders",
            pendingOrders: "Pending Orders",
            processOrders: "Process Orders",
            completedOrders: "Completed Orders",
          },
          NewOrder: {
            ChoosePlatform: "Choose a platform",
            EnterYourInformations: "Enter your informations",
            EnterYourInformationsDescription:
              "Use the fields below to enter your order information",
            YourBudget: "Your budget",
            YourBudgetDescription:
              "Select or enter your custom amount and choose your payment option.",
          },
        },
      },
    },
  });

export default i18n;

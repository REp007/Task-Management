import { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox"
const Home = () => {
    const [completedFeatures, setCompletedFeatures] = useState({
        auth: true,
        createTask: true,
        readTask: true,
        updateTask: true,
        deleteTask: true,
        markTask: true,
    });

    return (
        <div className="p-4 md:p-8 lg:p-16">
            <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Task Managment App
            </h1>
            <h2
                className="scroll-m-20 pt-5 text-2xl font-extrabold tracking-tight lg:text-2xl tracking-tight transition-colors first:mt-0"
            >
                Description du Projet
            </h2>
            <p className="leading-7 mt-6">
                Le but de ce projet est de développer une application web complète comprenant un backend et un frontend, avec les fonctionnalités suivantes :
            </p>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                Fonctionnalités principales
            </h3>
            <ul className="my-6 ml-6 list-disc">
                <li>
                    <label className="inline-flex items-center mt-3">
                        <Checkbox
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={completedFeatures.auth}
                        />
                        <span className="ml-2 text-gray-700">Authentification Utilisateur</span>
                    </label>
                </li>
                <li>
                    <label className="inline-flex items-center mt-3">
                        <Checkbox
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={completedFeatures.createTask}
                        />
                        <span className="ml-2 text-gray-700">Création de tâches</span>
                    </label>
                </li>
                <li>
                    <label className="inline-flex items-center mt-3">
                        <Checkbox
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={completedFeatures.readTask}
                        />
                        <span className="ml-2 text-gray-700">Lecture des tâches</span>
                    </label>
                </li>
                <li>
                    <label className="inline-flex items-center mt-3">
                        <Checkbox
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={completedFeatures.updateTask}
                        />
                        <span className="ml-2 text-gray-700">Mise à jour des tâches</span>
                    </label>
                </li>
                <li>
                    <label className="inline-flex items-center mt-3">
                        <Checkbox
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={completedFeatures.deleteTask}
                        />
                        <span className="ml-2 text-gray-700">Suppression des tâches</span>
                    </label>
                </li>
                <li>
                    <label className="inline-flex items-center mt-3">
                        <Checkbox
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={completedFeatures.markTask}
                        />
                        <span className="ml-2 text-gray-700">Marquage des tâches comme complètes ou incomplètes (optionnel)</span>
                    </label>
                </li>
            </ul>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                Technologies Utilisées
            </h3>
            <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
                Backend
            </h4>
            <ul className="my-6 ml-6 list-disc">
                <li>Langage : Node.js</li>
                <li>Framework : Express.js (optionnel)</li>
                <li>Base de données : Au choix (MongoDB, PostgreSQL, MySQL, etc.)</li>
                <li>ORM : Au choix (Mongoose, Sequelize, TypeORM, etc.)</li>
                <li>Sécurité : Utilisation de JWT (JSON Web Tokens) pour la gestion des tokens d'authentification</li>
            </ul>
            <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
                Frontend
            </h4>
            <ul className="my-6 ml-6 list-disc">
                <li>Langage : JavaScript (ES6+)</li>
                <li>Framework : React.js</li>
                <li>UI Library : Au choix (Material-UI, Ant Design, Bootstrap, etc.)</li>
                <li>State Management : Au choix (Redux, Context API, Zustand, etc.)</li>
                <li>Form Handling : Formik, React Hook Form (optionnel)</li>
            </ul>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                Tâches à Réaliser
            </h3>
            <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
                Backend
            </h4>
            <ul className="my-6 ml-6 list-disc">
                <li>Configurer le serveur Node.js</li>
                <li>Implémenter les routes d'authentification (inscription, connexion, déconnexion, réinitialisation de mot de passe)</li>
                <li>Créer les routes CRUD pour la gestion des tâches</li>
                <li>Gérer la sécurité des routes avec JWT</li>
                <li>Connecter le serveur à la base de données choisie</li>
                <li>(Optionnel) Ajouter une documentation API avec Swagger</li>
            </ul>
            <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
                Frontend
            </h4>
            <ul className="my-6 ml-6 list-disc">
                <li>Créer les interfaces utilisateur avec React.js</li>
                <li>Implémenter les formulaires d'inscription et de connexion</li>
                <li>Gérer l'état global de l'application avec le state management choisi</li>
                <li>Afficher la liste des tâches et permettre leur gestion (création, lecture, mise à jour, suppression)</li>
                <li>Ajouter des composants de style avec la librairie UI choisie</li>
                <li>(Optionnel) Améliorer l'expérience utilisateur avec des animations ou des transitions</li>
            </ul>
            <div className="by">
                <blockquote className="mt-6 text-right text-blue-700 border-l-2 pl-6 italic">
                    <a href={'https://x.com/Amr4nii'} target="new">
                        {'By @Amranii'}
                    </a>
                </blockquote>
            </div>
        </div>
    );
};

export default Home;

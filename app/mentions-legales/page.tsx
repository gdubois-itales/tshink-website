import Eyebrow from "@/components/ui/Eyebrow";

export default function MentionsLegalesPage() {
  return (
      <section className="section tight">
        <div className="wrap">
          <Eyebrow>Légal</Eyebrow>
          <h1 style={{ marginTop: 14, fontSize: 32 }}>
            Politique de confidentialité
          </h1>
          <p style={{ marginTop: 10, color: "var(--grey)", fontSize: 13.5 }}>
            Dernière mise à jour : 16 septembre 2026
          </p>
          <p style={{ marginTop: 26, maxWidth: 760, fontSize: 15, color: "var(--ink)" }}>
            Cette politique de confidentialité pour TshinK (marque exploitée par
            I-Tales SRL) décrit comment et pourquoi nous traitons vos
            informations personnelles lorsque vous utilisez nos services,
            notamment lorsque vous visitez notre site ou interagissez avec
            nous. Pour toute question, contactez-nous à{" "}
            <a href="mailto:contact@tshink.be" style={{ textDecoration: "underline" }}>
              contact@tshink.be
            </a>
            .
          </p>

          <div className="legal-layout" style={{ marginTop: 50 }}>
            <div className="legal-toc">
              <h4>Table des matières</h4>
              <a href="#l1">1. Éditeur du site</a>
              <a href="#l2">2. Informations collectées</a>
              <a href="#l3">3. Traitement des informations</a>
              <a href="#l4">4. Bases légales</a>
              <a href="#l5">5. Partage des informations</a>
              <a href="#l6">6. Durée de conservation</a>
              <a href="#l7">7. Mineurs</a>
              <a href="#l8">8. Vos droits</a>
              <a href="#l9">9. Ne pas suivre (DNT)</a>
              <a href="#l10">10. Modifications</a>
              <a href="#l11">11. Nous contacter</a>
              <a href="#l12">12. Accès à vos données</a>
            </div>

            <div className="legal-body">
              <h2 id="l1">1. Qui édite ce site et traite vos données ?</h2>
              <p>
                TshinK — marque exploitée par I-Tales SRL, société à
                responsabilité limitée de droit belge.
                <br />
                Siège : Horenberg 85, 3090 Overijse, Belgique
                <br />
                Numéro d&apos;entreprise (BCE) : 1023.072.361c
                <br />
                Numéro de TVA : BE 1023.072.361
                <br />
                Email : contact@tshink.be
              </p>

              <h2 id="l2">2. Quelles informations collectons-nous ?</h2>
              <p>
                <em>
                  En bref : nous collectons les informations personnelles que
                  vous nous fournissez.
                </em>
              </p>
              <p>
                Nous collectons les informations personnelles que vous nous
                fournissez volontairement lorsque vous manifestez un intérêt
                pour nos produits et Services, ou lorsque vous nous contactez.
                Cela peut inclure votre adresse email, votre nom, ainsi que le
                contenu de votre message ou de votre commande. Nous ne
                traitons pas d&apos;informations sensibles.
              </p>
              <p>
                Par ailleurs, le contenu de votre panier est conservé
                temporairement dans le stockage local de votre navigateur
                (sessionStorage), afin de ne pas le perdre en cas de
                rafraîchissement de la page. Cette information reste sur votre
                appareil, n&apos;est jamais transmise à nos serveurs tant que
                vous n&apos;envoyez pas votre commande, et est automatiquement
                supprimée à la fermeture de l&apos;onglet.
              </p>

              <h2 id="l3">3. Comment traitons-nous vos informations ?</h2>
              <p>
                <em>
                  En bref : pour fournir, améliorer et administrer nos
                  Services, communiquer avec vous, et nous conformer à la loi.
                </em>
              </p>
              <p>
                Nous traitons vos informations pour répondre à vos demandes et
                résoudre tout problème lié au service demandé, ainsi que pour
                protéger un intérêt vital lorsque cela est nécessaire.
              </p>

              <h2 id="l4">4. Sur quelles bases légales nous appuyons-nous ?</h2>
              <p>
                Le RGPD nous impose d&apos;expliquer nos bases légales :
                consentement (que vous pouvez retirer à tout moment), exécution
                d&apos;un contrat, obligations légales, et intérêts vitaux.
              </p>

              <h2 id="l5">5. Quand et avec qui partageons-nous vos informations ?</h2>
              <p>
                Nous utilisons deux formulaires Google Forms distincts (contact
                et commande/panier), associés à un script Google Apps Script
                qui nous envoie automatiquement un e-mail récapitulatif à
                chaque nouvelle réponse. Nous ne conservons aucune copie de vos
                données sur nos propres serveurs : elles restent uniquement
                dans Google Forms et dans notre messagerie électronique. Google
                agit à ce titre comme sous-traitant et peut être amené à
                traiter ces données, y compris le cas échéant en dehors de
                l&apos;Espace économique européen, dans le cadre des garanties
                qu&apos;il propose (clauses contractuelles types).
              </p>
              <p>
                Nous pouvons également partager des informations en cas de
                transfert d&apos;entreprise (fusion, vente d&apos;actifs,
                financement ou acquisition).
              </p>

              <h2 id="l6">6. Combien de temps conservons-nous vos informations ?</h2>
              <p>
                Aussi longtemps que nécessaire pour remplir les finalités
                décrites, sauf obligation légale contraire. Passé ce délai, les
                données sont supprimées ou anonymisées.
              </p>

              <h2 id="l7">7. Collectons-nous des informations auprès de mineurs ?</h2>
              <p>
                Non, nous ne collectons pas sciemment de données auprès
                d&apos;enfants de moins de 18 ans. Si vous apprenez le
                contraire, contactez-nous à contact@tshink.be.
              </p>

              <h2 id="l8">8. Quels sont vos droits en matière de confidentialité ?</h2>
              <p>
                Dans l&apos;EEE, vous disposez de droits d&apos;accès, de
                rectification, de suppression, de restriction, de portabilité
                et de ne pas faire l&apos;objet d&apos;une décision
                automatisée. Vous pouvez déposer une réclamation auprès de
                l&apos;Autorité de protection des données (APD) :
              </p>
              <ul>
                <li>Site web : autoriteprotectiondonnees.be</li>
                <li>Email : contact@apd-gba.be</li>
                <li>Téléphone : +32 2 274 48 00</li>
                <li>Courrier : Rue de la Presse 35, 1000 Bruxelles, Belgique</li>
              </ul>

              <h2 id="l9">9. Contrôles pour les fonctionnalités « Ne pas suivre »</h2>
              <p>
                Aucune norme technologique uniforme n&apos;ayant été finalisée
                pour reconnaître ces signaux, nous n&apos;y répondons pas
                actuellement.
              </p>

              <h2 id="l10">10. Apportons-nous des modifications à cette notice ?</h2>
              <p>
                Oui, si nécessaire pour rester conformes aux lois en vigueur.
                La date de révision sera mise à jour en haut de cette notice.
              </p>

              <h2 id="l11">11. Comment nous contacter au sujet de cette notice ?</h2>
              <p>
                TshinK — marque exploitée par I-Tales SRL
                <br />
                Horenberg 85, Overijse, 3090, Belgique
                <br />
                contact@tshink.be
              </p>

              <h2 id="l12">12. Comment consulter, mettre à jour ou supprimer vos données ?</h2>
              <p>
                Vous pouvez demander l&apos;accès, la correction ou la
                suppression de vos données à tout moment en nous contactant à
                contact@tshink.be.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
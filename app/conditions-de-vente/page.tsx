import Link from "next/link";
import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = { title: "Conditions de vente" };

const toc = [
    { id: "c1", label: "1. Qui sommes-nous ?" },
    { id: "c2", label: "2. Champ d’application" },
    { id: "c3", label: "3. Déroulement d’une commande" },
    { id: "c4", label: "4. Devis, prix et TVA" },
    { id: "c5", label: "5. Acompte et paiement" },
    { id: "c6", label: "6. Délais et remise" },
    { id: "c7", label: "7. Matières et mesures" },
    { id: "c8", label: "8. Retouches et vêtements confiés" },
    { id: "c9", label: "9. Droit de rétractation" },
    { id: "c10", label: "10. Annulation" },
    { id: "c11", label: "11. Garanties" },
    { id: "c12", label: "12. Réclamations et litiges" },
    { id: "c13", label: "13. Autres dispositions" },
    { id: "annexe", label: "Annexe : formulaire de rétractation" },
];

export default function ConditionsDeVentePage() {
    return (
        <section className="section tight">
            <div className="wrap">
                <Eyebrow>Légal</Eyebrow>
                <h1 style={{ marginTop: 14, fontSize: 32 }}>
                    Conditions générales de vente
                </h1>
                <p style={{ marginTop: 10, color: "var(--grey)", fontSize: 13.5 }}>
                    Dernière mise à jour : 21 octobre 2026
                </p>
                <p style={{ marginTop: 26, maxWidth: 760, fontSize: 15, color: "var(--ink)" }}>
                    Les présentes conditions générales de vente décrivent les règles qui
                    s’appliquent aux prestations de TshinK (marque exploitée par I-Tales
                    SRL) : création sur mesure, adaptation d’un modèle, retouches et
                    transformations de vêtements. Elles sont communiquées avant toute
                    acceptation de devis.
                </p>

                <div className="legal-layout" style={{ marginTop: 50 }}>
                    <div className="legal-toc">
                        <h4>Table des matières</h4>
                        {toc.map((item) => (
                            <a key={item.id} href={`#${item.id}`}>
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="legal-body">
                        <h2 id="c1">1. Qui sommes-nous ?</h2>
                        <p>
                            TshinK — marque exploitée par I-Tales SRL, société à
                            responsabilité limitée de droit belge.
                            <br />
                            Siège : Horenberg 85, 3090 Overijse, Belgique
                            <br />
                            Numéro d’entreprise (BCE) : 1023.072.361
                            <br />
                            Numéro de TVA : BE 1023.072.361
                            <br />
                            E-mail : contact@tshink.be
                        </p>

                        <h2 id="c2">2. Champ d’application et définitions</h2>
                        <p>
                            Les présentes conditions s’appliquent à toute demande, tout devis
                            et toute prestation de TshinK. Elles complètent le devis accepté.
                            En cas de contradiction, le devis accepté prévaut.
                        </p>
                        <p>
                            Est « consommateur » toute personne physique qui agit à des fins
                            qui ne relèvent pas de son activité professionnelle. Toute autre
                            personne ou entreprise est un « professionnel ». Les dispositions
                            réservées aux consommateurs sont signalées comme telles.
                        </p>
                        <p>
                            Les conditions applicables sont celles communiquées avant
                            l’acceptation du devis. Un professionnel accepte les présentes
                            conditions ; ses propres conditions ne s’appliquent pas, sauf
                            accord écrit de TshinK.
                        </p>

                        <h2 id="c3">3. Comment se déroule une commande ?</h2>
                        <p>
                            Une commande suit généralement les six étapes décrites sur la page
                            Services :
                        </p>
                        <ul>
                            <li>
                                Échange autour du projet. Le formulaire du site (panier ou
                                contact) ou un e-mail à contact@tshink.be constitue une simple
                                demande : il n’engage ni le client ni TshinK.
                            </li>
                            <li>
                                Choix du modèle et des matières, à distance ou lors d’un
                                rendez-vous.
                            </li>
                            <li>
                                Validation du projet. TshinK envoie un devis par e-mail. Le
                                contrat est conclu lorsque le client l’accepte par e-mail (par
                                exemple avec la mention « Bon pour accord »). Les travaux
                                démarrent à la réception de l’acompte (article 5).
                            </li>
                            <li>
                                Prototype et ajustements, si nécessaire, lors d’un rendez-vous
                                d’essayage.
                            </li>
                            <li>Confection de la pièce dans les matières choisies.</li>
                            <li>Essayage final, finitions et remise de la pièce.</li>
                        </ul>
                        <p>
                            Le devis précise si un prototype est prévu, le nombre d’essayages
                            et le délai indicatif. Les matières peuvent être validées à
                            distance. Pour toute création sur mesure, au moins un rendez-vous
                            (essayage du prototype ou essayage final) est nécessaire.
                        </p>

                        <h2 id="c4">4. Devis, prix et TVA</h2>
                        <p>
                            Les prix affichés sur le site sont indicatifs. Ils se composent du
                            prix du modèle (la base de la création) et du prix de la matière,
                            qui dépend de son tarif au moment de la confection ; certains
                            accessoires affichent une fourchette. Le prix ferme est celui du
                            devis.
                        </p>
                        <p>
                            Le devis est gratuit et valable 30 jours à compter de son envoi.
                            Passé ce délai, TshinK peut le réviser, notamment si le prix des
                            matières a changé. Il mentionne la description de la pièce,
                            les matières, le prix détaillé, l’acompte, le solde, le délai
                            indicatif, le mode de remise et, le cas échéant, les frais de livraison.
                        </p>
                        <p>
                            Les prix sont exprimés en euros. TVA comprise pour
                            les consommateurs ; hors TVA pour les professionnels, la TVA étant
                            ajoutée sur la facture.
                        </p>
                        <p>
                            Toute modification demandée après l’acceptation (modèle, matière,
                            finitions, mesures) donne lieu à un devis complémentaire, accepté
                            par écrit avant d’être exécutée.
                        </p>

                        <h2 id="c5">5. Acompte et paiement</h2>
                        <p>
                            Un acompte de 30 % du prix est dû à l’acceptation du devis,
                            payable par virement dans les 7 jours. Il permet notamment d’acheter les
                            matières et de réserver la réalisation de la pièce.
                        </p>
                        <p>
                            Le solde est payable à la remise de la pièce en main propre ou avant
                            son envoi pour livraison, par virement sur le compte indiqué dans le devis ou la
                            facture. Aucun paiement n’est demandé via le site. La pièce est remise après
                            paiement du solde.
                        </p>
                        <p>
                            Une facture est transmise par e-mail. Les factures des
                            professionnels sont payables dans les 30  jours.
                            En cas de retard, TshinK peut réclamer des intérêts de
                            retard et, pour les professionnels, une indemnité forfaitaire, dans
                            les limites prévues par la loi. TshinK peut aussi suspendre l’exécution
                            tant qu’une somme échue reste impayée.
                        </p>
                        <p>
                            Le sort de l’acompte en cas d’annulation est réglé à l’article 10.
                        </p>

                        <h2 id="c6">6. Délais et remise de la pièce</h2>
                        <p>
                            Un délai indicatif est communiqué dans le devis. Il court à partir
                            de la réception de l’acompte et de la validation par le client des
                            matières et des mesures, et dépend aussi de sa disponibilité pour
                            les essayages. TshinK prévient le client dès qu’un retard est
                            prévisible.
                        </p>
                        <p>
                            Si la pièce n’est pas remise dans le délai convenu, le consommateur
                            peut exercer les droits que lui reconnaît la loi, notamment
                            accorder un délai supplémentaire raisonnable avant de mettre fin au
                            contrat.
                        </p>
                        <p>
                            La pièce est remise en main propre lors de l’essayage final ou,
                            expédiée aux frais indiqués dans le devis. Le
                            risque de perte ou d’endommagement passe au client lorsque
                            lui-même, ou un tiers désigné par lui autre que le transporteur,
                            prend possession physique de la pièce.
                        </p>
                        <p>
                            Le client examine la pièce à la remise et signale tout défaut
                            apparent sans attendre, sans préjudice de ses droits légaux. Une
                            pièce prête doit être retirée dans les 30 jours suivant l’avis
                            de disponibilité ; au-delà, des frais de garde raisonnables
                            peuvent être réclamés.
                        </p>

                        <h2 id="c7">7. Matières, mesures et validation</h2>
                        <p>
                            Les photos du site et l’affichage des écrans ne restituent pas
                            fidèlement les couleurs, les textures et l’aspect des matières. De
                            légères variations sont normales, surtout avec des matières
                            naturelles. Les échantillons de l’atelier peuvent être consultés
                            lors d’un rendez-vous.
                        </p>
                        <p>
                            Les matières de l’atelier sont proposées dans la limite des
                            stocks. Si une matière n’est plus disponible, TshinK propose une
                            alternative, soumise à l’accord du client.
                        </p>
                        <p>
                            Les mesures sont prises par TshinK lors d’un rendez-vous ou
                            communiquées par le client, qui répond de leur exactitude. Lorsque
                            le client valide le prototype, les volumes et les proportions sont
                            réputés approuvés ; tout changement ultérieur relève de l’article 4
                            (devis complémentaire).
                        </p>
                        <p>
                            Lorsque le client fournit lui-même la matière ou la choisit auprès
                            d’un autre fournisseur, il garantit qu’elle convient à la
                            réalisation demandée et qu’elle est en quantité suffisante.
                            TshinK peut indiquer le métrage nécessaire. TshinK
                            peut refuser une matière inadaptée. Sous réserve de sa
                            responsabilité en cas de faute, TshinK ne répond ni des défauts non
                            décelables de cette matière ni de son éventuelle insuffisance.
                        </p>

                        <h2 id="c8">8. Retouches et vêtements confiés par le client</h2>
                        <p>
                            Cet article concerne les vêtements que le client confie à TshinK
                            pour une retouche, une réparation ou une transformation. Ils
                            restent la propriété du client.
                        </p>
                        <p>
                            Le client remet un vêtement propre. TshinK décrit son état à la
                            remise et, avec l’accord du client, le photographie.
                        </p>
                        <p>
                            Si TshinK identifie un risque avant d’intervenir (tissu fragile,
                            couture ou doublure abîmée, teinte susceptible de déteindre, etc.),
                            elle en informe le client et n’intervient qu’avec son accord.
                        </p>
                        <p>
                            TshinK exécute les travaux avec le soin d’un professionnel et
                            répond des dommages causés par sa faute. Elle ne répond pas des
                            défauts préexistants, de l’usure ou de la fragilité du vêtement
                            lorsqu’elle en a averti le client ou que ces éléments n’étaient pas
                            décelables.
                        </p>
                        <p>
                            Le délai est indicatif et figure dans le devis. Le retrait du
                            vêtement suit les règles de l’article 6.
                        </p>

                        <h2 id="c9">9. Droit de rétractation (consommateurs)</h2>
                        <p>
                            Cet article concerne uniquement les consommateurs. Les
                            professionnels ne disposent d’aucun droit de rétractation.
                        </p>
                        <p>
                            <strong>Principe.</strong>
                            <br/>
                            Lorsque le contrat est conclu à distance
                            (par e-mail, sans présence physique simultanée), le consommateur
                            dispose en principe de 14 jours pour se rétracter sans donner de
                            motif.
                        </p>
                        <p>
                            <strong>Création sur mesure.</strong>
                            <br/>
                            Ce droit ne s’applique pas à
                            la fourniture de biens confectionnés selon les spécifications du
                            consommateur ou nettement personnalisés (article VI.53, 3° du Code
                            de droit économique). C’est le cas des créations sur mesure, des
                            modèles adaptés (choix des matières, mesures, modifications) et des
                            accessoires réalisés sur commande avec les matières choisies.
                        </p>
                        <p>
                            <strong>Retouches et transformations.</strong>
                            <br/>
                            Il s’agit de
                            services : le consommateur peut se rétracter dans les 14 jours
                            suivant la conclusion du contrat, tant que le service n’est pas
                            pleinement exécuté. S’il demande expressément que les travaux
                            commencent avant la fin de ce délai, puis se rétracte, il paie un
                            montant proportionnel à ce qui a été fourni jusqu’à la
                            rétractation. Une fois le service pleinement exécuté avec son
                            accord préalable exprès, et après qu’il a reconnu perdre son droit
                            de rétractation, ce droit s’éteint (article VI.53, 1°). TshinK
                            recueille cet accord et cette reconnaissance dans le devis.
                        </p>
                        <p>
                            <strong>Pièce non personnalisée.</strong>
                            <br/>
                            Si TshinK vend
                            exceptionnellement une pièce déjà confectionnée et non
                            personnalisée, le délai de 14 jours court à compter de la
                            réception de la pièce.
                        </p>
                        <p>
                            <strong>Comment se rétracter.</strong>
                            <br/>
                            Par une déclaration dénuée
                            d’ambiguïté envoyée à contact@tshink.be avant la fin du délai, ou à
                            l’aide du modèle en annexe. TshinK rembourse les sommes perçues
                            dans les 14 jours suivant la notification. Pour une pièce non
                            personnalisée, le consommateur la renvoie dans les 14 jours et
                            supporte les frais directs de renvoi.
                        </p>

                        <h2 id="c10">10. Annulation après acceptation du devis</h2>
                        <p>
                            <strong>Avant le début des travaux.</strong>
                            <br/>
                            Le client peut annuler
                            par écrit. L’acompte est remboursé, déduction faite des frais
                            réellement engagés (temps passé en conception et en rendez-vous,
                            matières déjà achetées).
                        </p>
                        <p>
                            <strong>Après le début des travaux.</strong>
                            <br/>
                            Le client qui annule
                            paie le travail déjà réalisé et les matières achetées
                            spécialement, au prorata de l’avancement. Les pièces et matières
                            correspondantes lui sont remises contre paiement. L’acompte est
                            imputé sur ces sommes, et le surplus éventuel est remboursé. Pour
                            les consommateurs, les montants dus sont limités aux coûts
                            réellement engagés et au travail réellement effectué.
                        </p>
                        <p>
                            <strong>Annulation par TshinK.</strong>
                            <br/>
                            Si la réalisation devient
                            impossible (matière indisponible sans alternative acceptée, cas de
                            force majeure), TshinK rembourse les sommes versées pour la part
                            non exécutée.
                        </p>
                        <p>
                            <strong>Absence de réponse.</strong>
                            <br/>
                            Si le client ne répond pas à
                            3 relances écrites sur 60 jours, TshinK peut mettre fin au
                            contrat ; les règles de l’annulation après le début des travaux
                            s’appliquent alors.
                        </p>

                        <h2 id="c11">11. Garanties</h2>
                        <p>
                            <strong>Consommateurs.</strong>
                            <br/>
                            Les garanties légales de conformité
                            s’appliquent pendant 2 ans à compter de la délivrance de la pièce.
                            La pièce doit correspondre à ce qui a été convenu dans le devis. En
                            cas de défaut de conformité, le client écrit à contact@tshink.be,
                            dans un délai raisonnable, avec une description et des photos.
                            TshinK répare ou remplace la pièce sans frais ; à défaut, le
                            consommateur peut demander une réduction du prix ou la résolution
                            du contrat, dans les conditions de la loi.
                        </p>
                        <p>
                            <strong>Ce que la garantie ne couvre pas.</strong>
                            <br/>
                            L’usure normale,
                            le non-respect des conseils d’entretien, un accident, une
                            modification ou une réparation par un tiers, et les légères
                            variations de couleur ou de texture propres aux matières (article
                            7). TshinK donne des conseils d’entretien adaptés à la remise de
                            la pièce ou sur demande.
                        </p>
                        <p>
                            <strong>Retouches.</strong>
                            <br/>
                            TshinK reprend sans frais une retouche
                            mal exécutée, signalée dans un délai raisonnable.
                        </p>
                        <p>
                            <strong>Professionnels.</strong>
                            <br/>
                            Le professionnel vérifie la pièce
                            à la remise. Il signale par écrit les défauts apparents dans les 7
                            jours et les vices cachés dans un bref délai après leur découverte.
                        </p>

                        <h2 id="c12">12. Réclamations, médiation et droit applicable</h2>
                        <p>
                            <strong>Réclamation.</strong>
                            <br/>
                            Le client écrit à contact@tshink.be
                            ou à l’adresse du siège. TshinK accuse réception sous 7 jours
                            et cherche une solution à l’amiable.
                        </p>
                        <p>
                            <strong>Médiation.</strong>
                            <br/>
                            Si le litige persiste, le consommateur
                            peut s’adresser au Service de médiation pour le consommateur ou à
                            la plateforme Belmed du SPF Économie : https://economie.fgov.be/fr.
                            <br/>
                            • Téléphone (gratuit) : 0800 120 33
                            <br/>
                            • E-mail : info.eco@economie.fgov.be
                            <br/>
                            • Adresse postale : City Atrium C, Rue du Progrès 50, 1210 Bruxelles
                        </p>
                        <p>
                            <strong>Droit applicable.</strong>
                            <br/>
                            Le droit belge s’applique, sans
                            préjudice des dispositions impératives qui protègent le
                            consommateur dans son pays de résidence.
                        </p>
                        <p>
                            <strong>Tribunaux.</strong>
                            <br/>
                            Pour les consommateurs, les tribunaux
                            compétents selon les règles légales. Pour les professionnels, les
                            tribunaux de Bruxelles.
                        </p>

                        <h2 id="c13">13. Autres dispositions</h2>
                        <p>
                            <strong>Propriété intellectuelle.</strong>
                            <br/>
                            Les créations, patrons,
                            dessins, prototypes et photographies de TshinK restent sa
                            propriété. Le client acquiert la pièce, pas le droit de la
                            reproduire, de la faire reproduire ou d’en commercialiser le modèle
                            ou le patron. Le client qui fournit des images ou des inspirations
                            garantit qu’il a le droit de les utiliser.
                        </p>
                        <p>
                            <strong>Photographies.</strong>
                            <br/>
                            TshinK peut photographier les
                            pièces réalisées pour son portfolio, son site et ses réseaux
                            sociaux. Elle ne publie aucune photo sur laquelle le client est
                            reconnaissable sans son accord, et le client peut s’y opposer par
                            écrit à tout moment.
                        </p>
                        <p>
                            <strong>Force majeure.</strong>
                            <br/>
                            Un événement imprévisible et
                            irrésistible suspend les obligations concernées. La partie touchée
                            en informe l’autre sans délai. Si l’empêchement dure plus de 60 jours,
                            chacune peut mettre fin au contrat, et le travail déjà réalisé reste dû.
                        </p>
                        <p>
                            <strong>Données personnelles.</strong>
                            <br/>
                            Voir nos{" "}
                            <Link href="/mentions-legales" style={{ textDecoration: "underline" }}>
                                mentions légales et politique de confidentialité
                            </Link>
                            .
                        </p>
                        <p>
                            <strong>Divers.</strong>
                            <br/>
                            Si une clause est invalide, les autres
                            restent applicables. Le contrat est rédigé en français. TshinK peut
                            modifier les présentes conditions pour l’avenir ; la version
                            applicable est celle communiquée avant l’acceptation du devis.
                        </p>

                        <h2 id="annexe">Annexe : modèle de formulaire de rétractation</h2>
                        <p>
                            À utiliser uniquement si vous souhaitez vous rétracter. Ce modèle n’est pas
                            obligatoire : vous pouvez aussi écrire librement à contact@tshink.be.
                        </p>
                        <div className="legal-form">
                            <p>
                                À l’attention de TshinK (I-Tales SRL), Horenberg 85, 3090 Overijse,
                                Belgique — contact@tshink.be :
                                <br />
                                Je/nous (*) vous notifie/notifions (*) par la présente ma/notre (*)
                                rétractation du contrat portant sur la vente du bien (*) / pour la
                                prestation de services (*) ci-dessous :
                                <br />
                                Commandé le (*) / reçu le (*) :
                                <br />
                                Nom du (des) consommateur(s) :
                                <br />
                                Adresse du (des) consommateur(s) :
                                <br />
                                Signature du (des) consommateur(s) (uniquement en cas de notification du
                                présent formulaire sur papier) :
                                <br />
                                Date :
                                <br />
                                (*) Biffez la mention inutile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
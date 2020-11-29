//Configuration de la page de paiement
require('chemin_vers_le_dossier_du_client_php/pay-php-gateway.php');
$setup = new Pay_Setup();
$setup->setApi_key("votre clé principale génénée lors de la création de l'application");
$setup->setMode("mode d'utilisation (soit live, soit test)");
$setup->setToken("token généné lors de la création de l'application");
//Configuration des informations de votre boutique/service
$store = new Pay_Checkout_Store();
$store->setName("nom de votre boutique/application");
$store->setWebsiteUrl("url de votre site");
$store->setCancelUrl("url de d'annulation de vente");
$store->setCallbackUrl("url de retour apres validation du paiement");
$store->setReturnUrl("url de retour apres validation du paiement");
// Soit $co la variable contenant la commande
$co = new Pay_Checkout_Invoice($store, $setup);
//addItem()
$co->addItem("Jean Gucci", 3, 150, 450, "Jean bleu, de marque Gucci");
$co->addItem("Jean Prada", 2, 100, 200, "Jean noir, de marque Prada");
//Pour ajouter le total et la description de la facture
$co->setTotalAmount($total_amount);
$co->setDescription("Achat de deux articles sur le site Jeans Missebo");
//Pour lancer le processus de paiement
// démarrage du processus de paiement
// envoi de la requete
if($co->create()) {
  // Requête acceptée, alors on redirige le client vers la page de validation de paiement
  header("Location: ".$co->getInvoiceUrl());
}else{
  // Requête refusée, alors on affiche le motif du rejet
  echo $co->response_text;
}
//Configuration de la page vérification du paiement (page du return_url)
require('chemin_vers_le_dossier_du_client_php/pay-php-gateway.php');
$setup = new Pay_Setup();
$setup->setApi_key("votre clé principale génénée lors de la création de l'application");
$setup->setMode("mode suivant lequel");
$setup->setToken("token généné lors de la création de l'application");
//Configuration des informations de votre boutique/service
$store = new Pay_Checkout_Store();
$store->setName("nom de votre boutique/application");
$store->setWebsiteUrl("url de votre site");
$store->setCancelUrl("url de d'annulation de vente");
$store->setCallbackUrl("url de retour apres validation du paiement");
$store->setReturnUrl("url de retour apres validation du paiement");
// Soit $co la variable contenant la commande
$co = new Pay_Checkout_Invoice($store, $setup);
//Pour vérifier le statut du paiement
// La méthode confirm returne true ou false dépendamment du statut du paiement
// Vous pouvez donc utiliser une instruction if - else et gérer le résultat comme bon vous semble
if ($co->confirm()) {
  // transaction réussie
}else{
  //transaction échouée
}

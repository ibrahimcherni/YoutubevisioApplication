<?php

namespace App\Controller;

use function MongoDB\BSON\toJSON;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;


use App\Entity\History;

class HistoryController extends Controller
{


    /**
     * @Route("/history/lol", name="history")
     */

    public function index()
    {
        // you can fetch the EntityManager via $this->getDoctrine()
        // or you can add an argument to your action: index(EntityManagerInterface $entityManager)
        $entityManager = $this->getDoctrine()->getManager();


        $history = new History();
        $history->setUrl('youtube123');




        // tell Doctrine you want to (eventually) save the Product (no queries yet)

        $entityManager->persist($history);




        // actually executes the queries (i.e. the INSERT query)

        $entityManager->flush();


        return new Response('Saved new url with id '.$history->getId());
    }

    /**
     * @Route("/history", name="history_show")
     */
    public function findAll(): array
    {
        $conn = $this->getDoctrine()->getConnection();

        $sql = '
        SELECT * FROM history 
        ';
        $stmt = $conn->prepare($sql);

        // returns an array of arrays (i.e. a raw data set)
        return new Response('historique liste ' .$stmt->fetchAll());

    }



}


